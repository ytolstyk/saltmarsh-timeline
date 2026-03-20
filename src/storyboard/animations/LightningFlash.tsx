import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% { opacity: 0; }
  5% { opacity: 0.8; }
  10% { opacity: 0; }
  15% { opacity: 0.4; }
  20% { opacity: 0; }
  100% { opacity: 0; }
`;

const Overlay = styled.div<{ $delay: number }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse at 50% 20%,
    rgba(200, 200, 255, 0.6),
    transparent 70%
  );
  animation: ${flash} 3s ease-in-out infinite;
  animation-delay: ${(p) => p.$delay}s;
`;

export const LightningFlash = ({ isActive }: { isActive: boolean }) => {
  const [delay, setDelay] = useState(0);

  useEffect(() => {
    if (isActive) setDelay(Math.random() * 2);
  }, [isActive]);

  if (!isActive) return null;
  return <Overlay $delay={delay} />;
};
