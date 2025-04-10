import { useEffect, useRef, useState } from "react";

export function useWidth(subtractMargin: number = 0) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (elementRef.current) {
        setWidth(elementRef.current.getBoundingClientRect().width);
      }
    };

    setTimeout(() => {
      updateWidth();
    }, 0);
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return {
    elementRef,
    width: Math.max(0, width - subtractMargin),
  };
}
