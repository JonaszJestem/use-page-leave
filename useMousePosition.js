import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
    previousX: null,
    previousY: null,
  });

  const updateMousePosition = (event) => {
    setMousePosition(({ x: prevX, y: prevY }) => ({
      x: event.clientX,
      y: event.clientY,
      previousY: prevY,
      previousX: prevX,
    }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
