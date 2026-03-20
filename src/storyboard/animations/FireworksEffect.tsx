import { useCallback, useRef } from "react";
import { useCanvasAnimation } from "./useCanvasAnimation";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const COLORS = [
  "#ff6b6b",
  "#ffd93d",
  "#6bcb77",
  "#4d96ff",
  "#ff6fff",
  "#ffa500",
  "#00ffff",
];

export const FireworksEffect = ({ isActive }: { isActive: boolean }) => {
  const particlesRef = useRef<Particle[]>([]);
  const nextBurstRef = useRef(0);

  const draw = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      w: number,
      h: number,
      time: number
    ) => {
      const dw = w / window.devicePixelRatio;
      const dh = h / window.devicePixelRatio;

      if (time > nextBurstRef.current) {
        const cx = dw * 0.2 + Math.random() * dw * 0.6;
        const cy = dh * 0.1 + Math.random() * dh * 0.4;
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const count = 30 + Math.floor(Math.random() * 30);

        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
          const speed = 1 + Math.random() * 3;
          particlesRef.current.push({
            x: cx,
            y: cy,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 0,
            maxLife: 60 + Math.random() * 40,
            color,
            size: 2 + Math.random() * 2,
          });
        }
        nextBurstRef.current = time + 800 + Math.random() * 1500;
      }

      const alive: Particle[] = [];
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03;
        p.life++;

        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) continue;

        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        alive.push(p);
      }
      ctx.globalAlpha = 1;
      particlesRef.current = alive;
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
