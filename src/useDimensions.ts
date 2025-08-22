import { useEffect, useRef, useState } from "react";

export function useDimensions() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.getBoundingClientRect().width);
        setHeight(elementRef.current.getBoundingClientRect().height);
      }
    };

    setTimeout(() => {
      updateDimensions();
    }, 0);
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return {
    elementRef,
    width,
    height,
  };
}
