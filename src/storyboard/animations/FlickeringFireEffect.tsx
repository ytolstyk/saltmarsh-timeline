import styled, { keyframes } from "styled-components";

const flickerA = keyframes`
  0%   { opacity: 0.22; }
  7%   { opacity: 0.34; }
  18%  { opacity: 0.18; }
  29%  { opacity: 0.36; }
  41%  { opacity: 0.21; }
  55%  { opacity: 0.32; }
  68%  { opacity: 0.17; }
  80%  { opacity: 0.29; }
  91%  { opacity: 0.22; }
  100% { opacity: 0.22; }
`;

const flickerB = keyframes`
  0%   { opacity: 0.29; }
  13%  { opacity: 0.17; }
  27%  { opacity: 0.36; }
  38%  { opacity: 0.20; }
  52%  { opacity: 0.34; }
  63%  { opacity: 0.15; }
  76%  { opacity: 0.35; }
  88%  { opacity: 0.25; }
  100% { opacity: 0.29; }
`;

const LayerA = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse 112% 84% at 50% 55%,
    rgba(200, 70, 0, 0.39) 0%,
    rgba(160, 40, 0, 0.21) 45%,
    transparent 75%
  );
  animation: ${flickerA} 2.3s ease-in-out infinite;
`;

const LayerB = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse 91% 67% at 52% 58%,
    rgba(240, 100, 10, 0.34) 0%,
    rgba(180, 50, 0, 0.15) 50%,
    transparent 80%
  );
  animation: ${flickerB} 1.7s ease-in-out infinite;
`;

export const FlickeringFireEffect = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return (
    <>
      <LayerA />
      <LayerB />
    </>
  );
};
