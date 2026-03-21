import { useEffect, useRef } from "react";

interface FogWisp {
  x: number;
  y: number;
  radius: number;
  maxOpacity: number;
  xSpeed: number;
  ySpeed: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  age: number;
  lifespan: number;
}

const NUM_WISPS = 40;

function createWisp(canvasWidth: number, canvasHeight: number, fromBottom = false): FogWisp {
  const lifespan = 300 + Math.random() * 200;
  const xSpeed = (0.08 + Math.random() * 0.14) * (Math.random() < 0.5 ? 1 : -1);
  const ySpeed = 0.06 + Math.random() * 0.1;
  const x = Math.random() * canvasWidth;
  const y = canvasHeight * (0.5 + Math.random() * 0.5);
  return {
    x,
    y,
    radius: 60 + Math.random() * 100,
    maxOpacity: 0.18 + Math.random() * 0.12,
    xSpeed,
    ySpeed,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.006 + Math.random() * 0.008,
    wobbleAmp: 15 + Math.random() * 25,
    age: fromBottom ? 0 : Math.random() * lifespan * 0.5,
    lifespan,
  };
}

export const FogEffect = ({ isActive }: { isActive: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const wispsRef = useRef<FogWisp[]>([]);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      wispsRef.current = Array.from({ length: NUM_WISPS }, () =>
        createWisp(canvas.width, canvas.height, false)
      );
    };
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < wispsRef.current.length; i++) {
        const w = wispsRef.current[i];
        w.age++;

        const t = w.age / w.lifespan;
        let alpha: number;
        if (t < 0.35) {
          alpha = (t / 0.35) * w.maxOpacity;
        } else if (t < 0.7) {
          alpha = w.maxOpacity;
        } else {
          alpha = w.maxOpacity * (1 - (t - 0.7) / 0.3);
        }

        w.wobble += w.wobbleSpeed;
        w.x += w.xSpeed;
        w.y -= w.ySpeed;
        const wy = w.y + Math.sin(w.wobble) * w.wobbleAmp;

        // Fade out the higher wisps are: full opacity in lower portion,
        // linear fade to 0 at 30% from top (= above 70% from bottom)
        const heightFactor = Math.max(0, Math.min(1, (wy - canvas.height * 0.3) / (canvas.height * 0.4)));
        const a = alpha * heightFactor;

        const grad = ctx.createRadialGradient(w.x, wy, 0, w.x, wy, w.radius);
        grad.addColorStop(0, `rgba(240, 245, 250, ${a})`);
        grad.addColorStop(0.5, `rgba(210, 225, 235, ${a * 0.6})`);
        grad.addColorStop(1, `rgba(190, 210, 225, 0)`);

        ctx.beginPath();
        ctx.arc(w.x, wy, w.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        if (w.age >= w.lifespan || w.y < -w.radius) {
          wispsRef.current[i] = createWisp(canvas.width, canvas.height, true);
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [isActive]);

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
        zIndex: 1,
      }}
    />
  );
};
