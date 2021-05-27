import { useEffect, useState } from "react";

type MousePosition = {
  x: null | number;
  y: null | number;
  previousX: null | number;
  previousY: null | number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null,
    previousX: null,
    previousY: null,
  });

  const updateMousePosition = (event: MouseEvent) => {
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
