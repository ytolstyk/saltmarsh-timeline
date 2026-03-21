import { useEffect, useRef } from "react";

interface Wisp {
  x: number;
  y: number;
  radius: number;
  maxOpacity: number;
  speed: number;
  drift: number;
  driftSpeed: number;
  age: number;
  lifespan: number;
  wobble: number;
  wobbleSpeed: number;
}

const NUM_WISPS = 40;

function createWisp(canvasWidth: number, canvasHeight: number): Wisp {
  const lifespan = 336 + Math.random() * 168;
  return {
    x: canvasWidth * (0.1 + Math.random() * 0.8),
    y: canvasHeight + Math.random() * 60,
    radius: 20 + Math.random() * 35,
    maxOpacity: 0.28 + Math.random() * 0.2,
    speed: 0.5 + Math.random() * 0.8,
    drift: (Math.random() - 0.5) * 0.6,
    driftSpeed: 0.003 + Math.random() * 0.005,
    age: 0,
    lifespan,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.02 + Math.random() * 0.03,
  };
}

export const SmokeEffect = ({ isActive }: { isActive: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const wispsRef = useRef<Wisp[]>([]);

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
        createWisp(canvas.width, canvas.height)
      );
    };
    resize();

    // Scatter initial wisps across varying heights so it doesn't all start at once
    for (const w of wispsRef.current) {
      w.y = Math.random() * canvas.height;
      w.age = Math.random() * w.lifespan * 0.6;
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const w of wispsRef.current) {
        w.age++;

        // Fade in quickly over first 15% of life, then fade out aggressively over last 50%
        const t = w.age / w.lifespan;
        let alpha: number;
        if (t < 0.15) {
          alpha = (t / 0.15) * w.maxOpacity;
        } else if (t < 0.75) {
          alpha = w.maxOpacity;
        } else {
          alpha = w.maxOpacity * (1 - (t - 0.75) / 0.25);
        }

        // Wobble horizontal drift
        w.wobble += w.wobbleSpeed;
        const wx = w.x + Math.sin(w.wobble) * 18;

        // Draw layered radial gradient for each wisp (soft blob)
        const grad = ctx.createRadialGradient(wx, w.y, 0, wx, w.y, w.radius);
        grad.addColorStop(0, `rgba(15, 12, 10, ${alpha})`);
        grad.addColorStop(0.45, `rgba(10, 8, 7, ${alpha * 0.6})`);
        grad.addColorStop(1, `rgba(5, 4, 3, 0)`);

        ctx.beginPath();
        ctx.arc(wx, w.y, w.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        w.y -= w.speed;
        w.radius += 0.25;

        if (w.age >= w.lifespan) {
          Object.assign(w, createWisp(canvas.width, canvas.height));
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
      }}
    />
  );
};
