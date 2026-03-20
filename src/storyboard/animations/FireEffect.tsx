import { useCallback, useRef } from "react";
import { useCanvasAnimation } from "./useCanvasAnimation";

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

export const FireEffect = ({ isActive }: { isActive: boolean }) => {
  const embersRef = useRef<Ember[]>([]);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const dw = w / window.devicePixelRatio;
      const dh = h / window.devicePixelRatio;

      // Spawn new embers
      for (let i = 0; i < 3; i++) {
        embersRef.current.push({
          x: dw * 0.2 + Math.random() * dw * 0.6,
          y: dh,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(2 + Math.random() * 3),
          size: 3 + Math.random() * 5,
          life: 0,
          maxLife: 60 + Math.random() * 60,
        });
      }

      // Fire glow gradient at bottom
      const gradient = ctx.createLinearGradient(0, dh, 0, dh * 0.6);
      gradient.addColorStop(0, "rgba(255, 80, 0, 0.3)");
      gradient.addColorStop(0.5, "rgba(255, 160, 0, 0.1)");
      gradient.addColorStop(1, "rgba(255, 200, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, dh * 0.6, dw, dh * 0.4);

      const alive: Ember[] = [];
      for (const e of embersRef.current) {
        e.x += e.vx;
        e.y += e.vy;
        e.vx += (Math.random() - 0.5) * 0.3;
        e.life++;

        const alpha = 1 - e.life / e.maxLife;
        if (alpha <= 0) continue;

        const r = 255;
        const g = Math.floor(100 + 100 * alpha);
        const b = 0;
        ctx.globalAlpha = alpha * 0.8;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        alive.push(e);
      }
      ctx.globalAlpha = 1;
      embersRef.current = alive;
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
