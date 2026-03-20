import { useCallback, useRef } from "react";
import { useCanvasAnimation } from "./useCanvasAnimation";

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
}

export const RainEffect = ({ isActive }: { isActive: boolean }) => {
  const dropsRef = useRef<Drop[]>([]);
  const initedRef = useRef(false);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dw = w / window.devicePixelRatio;
      const dh = h / window.devicePixelRatio;

      if (!initedRef.current || dropsRef.current.length === 0) {
        dropsRef.current = Array.from({ length: 120 }, () => ({
          x: Math.random() * dw,
          y: Math.random() * dh,
          speed: 4 + Math.random() * 6,
          length: 15 + Math.random() * 20,
        }));
        initedRef.current = true;
      }

      ctx.strokeStyle = "rgba(174, 194, 224, 0.5)";
      ctx.lineWidth = 1;

      for (const drop of dropsRef.current) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 2, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;
        if (drop.y > dh) {
          drop.y = -drop.length;
          drop.x = Math.random() * dw;
        }
      }
    },
    []
  );

  const canvasRef = useCanvasAnimation(isActive, draw);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};
