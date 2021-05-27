import { useEffect, useState } from "react";
import useMousePosition from "./useMousePosition";

const TOP_OF_SCREEN_THRESHOLD = 10;

export const usePageLeave = () => {
  const { y, previousY } = useMousePosition();
  const [leavesPage, setLeavesPage] = useState(false);

  useEffect(() => {
    if (!y || !previousY) {
      return;
    }

    const isOnTopOfTheScreen = y < TOP_OF_SCREEN_THRESHOLD;

    if (isOnTopOfTheScreen) {
      setLeavesPage(true);
    }
  }, [y, previousY]);

  return { leavesPage };
};
