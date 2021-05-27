import { useEffect, useState } from "react";
import useMousePosition from "./useMousePosition";

const TOP_OF_SCREEN_THRESHOLD = 10;

export const useShowBeforeLeave = () => {
  const { y, previousY } = useMousePosition();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!y || !previousY) {
      return;
    }

    const isOnTopOfTheScreen = y < TOP_OF_SCREEN_THRESHOLD;

    if (isOnTopOfTheScreen) {
      setOpen(true);
    }
  }, [y, previousY]);

  return { isOpen, setOpen };
};
