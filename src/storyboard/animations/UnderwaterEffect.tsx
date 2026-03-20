import { useCallback, useRef } from "react";
import { useCanvasAnimation } from "./useCanvasAnimation";

interface Bubble {
  x: number;
  y: number;
  size: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
}

export const UnderwaterEffect = ({ isActive }: { isActive: boolean }) => {
  const bubblesRef = useRef<Bubble[]>([]);
  const initedRef = useRef(false);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dw = w / window.devicePixelRatio;
      const dh = h / window.devicePixelRatio;

      if (!initedRef.current) {
        bubblesRef.current = Array.from({ length: 30 }, () => ({
          x: Math.random() * dw,
          y: dh + Math.random() * dh,
          size: 3 + Math.random() * 8,
          speed: 0.5 + Math.random() * 1.5,
          wobble: 0,
          wobbleSpeed: 0.02 + Math.random() * 0.03,
        }));
        initedRef.current = true;
      }

      for (const b of bubblesRef.current) {
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const wx = b.x + Math.sin(b.wobble) * 10;

        if (b.y < -20) {
          b.y = dh + 10;
          b.x = Math.random() * dw;
        }

        ctx.beginPath();
        ctx.arc(wx, b.y, b.size, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(150, 220, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
          wx - b.size * 0.3,
          b.y - b.size * 0.3,
          b.size * 0.2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(200, 240, 255, 0.4)";
        ctx.fill();
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
