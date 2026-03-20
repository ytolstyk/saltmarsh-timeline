import { useCallback, useRef } from "react";
import { useCanvasAnimation } from "./useCanvasAnimation";

interface Confetti {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotSpeed: number;
  color: string;
  w: number;
  h: number;
}

const COLORS = [
  "#ff6b6b",
  "#ffd93d",
  "#6bcb77",
  "#4d96ff",
  "#ff6fff",
  "#ffa500",
  "#ff4757",
  "#2ed573",
];

export const CelebrationEffect = ({ isActive }: { isActive: boolean }) => {
  const confettiRef = useRef<Confetti[]>([]);
  const initedRef = useRef(false);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dw = w / window.devicePixelRatio;
      const dh = h / window.devicePixelRatio;

      if (!initedRef.current) {
        confettiRef.current = Array.from({ length: 80 }, () => ({
          x: Math.random() * dw,
          y: -Math.random() * dh,
          vx: (Math.random() - 0.5) * 2,
          vy: 1 + Math.random() * 2,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          w: 4 + Math.random() * 6,
          h: 6 + Math.random() * 8,
        }));
        initedRef.current = true;
      }

      for (const c of confettiRef.current) {
        c.x += c.vx;
        c.y += c.vy;
        c.rotation += c.rotSpeed;
        c.vx += (Math.random() - 0.5) * 0.1;

        if (c.y > dh + 20) {
          c.y = -10;
          c.x = Math.random() * dw;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
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
