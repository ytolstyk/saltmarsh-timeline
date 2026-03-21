import { useCallback, useRef } from "react";
import { useCanvasAnimation } from "./useCanvasAnimation";

interface Flame {
  x: number;
  y: number;
  rx: number;       // horizontal radius
  ry: number;       // vertical radius
  age: number;
  lifespan: number;
  maxOpacity: number;
  speed: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  temp: number;     // 0 = cooler (orange-red), 1 = hotter (yellow-white)
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  age: number;
  lifespan: number;
}

function spawnFlame(w: number, h: number, scatter = false): Flame {
  const lifespan = 50 + Math.random() * 70;
  return {
    x: w * (0.1 + Math.random() * 0.8),
    y: scatter ? h * (0.5 + Math.random() * 0.5) : h + 10,
    rx: 30 + Math.random() * 60,
    ry: 60 + Math.random() * 100,
    age: scatter ? Math.random() * lifespan : 0,
    lifespan,
    maxOpacity: 0.2 + Math.random() * 0.15,
    speed: 1.2 + Math.random() * 1.8,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.05 + Math.random() * 0.06,
    wobbleAmp: 10 + Math.random() * 25,
    temp: 0.3 + Math.random() * 0.7,
  };
}

function spawnEmber(w: number, h: number): Ember {
  return {
    x: w * (0.15 + Math.random() * 0.7),
    y: h * (0.75 + Math.random() * 0.2),
    vx: (Math.random() - 0.5) * 2,
    vy: -(2.5 + Math.random() * 3.5),
    size: 1.5 + Math.random() * 2.5,
    age: 0,
    lifespan: 60 + Math.random() * 80,
  };
}

const NUM_FLAMES = 22;
const NUM_EMBERS = 35;

export const FireEffect = ({ isActive }: { isActive: boolean }) => {
  const flamesRef = useRef<Flame[]>([]);
  const embersRef = useRef<Ember[]>([]);
  const initialised = useRef(false);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, cw: number, ch: number) => {
      const w = cw / window.devicePixelRatio;
      const h = ch / window.devicePixelRatio;

      // One-time scatter init
      if (!initialised.current) {
        flamesRef.current = Array.from({ length: NUM_FLAMES }, () => spawnFlame(w, h, true));
        embersRef.current = Array.from({ length: NUM_EMBERS }, () => {
          const e = spawnEmber(w, h);
          e.age = Math.random() * e.lifespan;
          return e;
        });
        initialised.current = true;
      }

      // --- Base glow at bottom ---
      const baseGrad = ctx.createRadialGradient(w * 0.5, h, 0, w * 0.5, h, w * 0.65);
      baseGrad.addColorStop(0,   "rgba(255, 120, 0, 0.35)");
      baseGrad.addColorStop(0.4, "rgba(200, 50, 0, 0.18)");
      baseGrad.addColorStop(1,   "rgba(100, 10, 0, 0)");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, w, h);

      // --- Flames ---
      const aliveFlames: Flame[] = [];
      for (const f of flamesRef.current) {
        f.age++;
        f.wobble += f.wobbleSpeed;

        const t = f.age / f.lifespan;
        let alpha: number;
        if (t < 0.1) {
          alpha = (t / 0.1) * f.maxOpacity;
        } else if (t < 0.55) {
          alpha = f.maxOpacity;
        } else {
          alpha = f.maxOpacity * (1 - (t - 0.55) / 0.45);
        }

        const wx = f.x + Math.sin(f.wobble) * f.wobbleAmp * (1 - t);
        // Spread horizontally as flame rises
        const spread = 1 + t * 0.4;

        // Multi-stop radial: white-yellow core → orange → red → transparent
        const grad = ctx.createRadialGradient(wx, f.y, 0, wx, f.y, f.ry);
        if (f.temp > 0.6) {
          // Hot flame — yellow-white core
          grad.addColorStop(0,    `rgba(255, 255, ${Math.floor(180 * f.temp)}, ${alpha})`);
          grad.addColorStop(0.2,  `rgba(255, 200, 0, ${alpha * 0.9})`);
          grad.addColorStop(0.5,  `rgba(255, 80, 0, ${alpha * 0.6})`);
          grad.addColorStop(0.75, `rgba(180, 20, 0, ${alpha * 0.25})`);
          grad.addColorStop(1,    "rgba(80, 0, 0, 0)");
        } else {
          // Cooler flame — orange-red
          grad.addColorStop(0,    `rgba(255, 140, 0, ${alpha})`);
          grad.addColorStop(0.3,  `rgba(220, 60, 0, ${alpha * 0.8})`);
          grad.addColorStop(0.6,  `rgba(160, 20, 0, ${alpha * 0.4})`);
          grad.addColorStop(1,    "rgba(60, 0, 0, 0)");
        }

        ctx.fillStyle = grad;
        ctx.fillRect(wx - f.ry * spread, f.y - f.ry, f.ry * 2 * spread, f.ry * 2);

        f.y -= f.speed;

        if (f.age < f.lifespan) {
          aliveFlames.push(f);
        } else {
          aliveFlames.push(spawnFlame(w, h));
        }
      }
      flamesRef.current = aliveFlames;

      // --- Embers ---
      const aliveEmbers: Ember[] = [];
      for (const e of embersRef.current) {
        e.age++;
        e.x += e.vx;
        e.y += e.vy;
        e.vx += (Math.random() - 0.5) * 0.25;
        e.vy *= 0.99;

        const t = e.age / e.lifespan;
        const alpha = t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9;

        const r = 255;
        const g = Math.floor(180 + 75 * (1 - t));
        ctx.globalAlpha = alpha * 0.9;
        ctx.fillStyle = `rgb(${r}, ${g}, 0)`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fill();

        if (e.age < e.lifespan) {
          aliveEmbers.push(e);
        } else {
          aliveEmbers.push(spawnEmber(w, h));
        }
      }
      ctx.globalAlpha = 1;
      embersRef.current = aliveEmbers;
    },
    []
  );

  const canvasRef = useCanvasAnimation(isActive, draw);

  if (!isActive) return null;

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
