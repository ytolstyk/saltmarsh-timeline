import styled, { keyframes } from "styled-components";

const flickerA = keyframes`
  0%   { opacity: 0.18; }
  7%   { opacity: 0.26; }
  18%  { opacity: 0.14; }
  29%  { opacity: 0.28; }
  41%  { opacity: 0.16; }
  55%  { opacity: 0.24; }
  68%  { opacity: 0.12; }
  80%  { opacity: 0.22; }
  91%  { opacity: 0.17; }
  100% { opacity: 0.18; }
`;

const flickerB = keyframes`
  0%   { opacity: 0.22; }
  13%  { opacity: 0.12; }
  27%  { opacity: 0.28; }
  38%  { opacity: 0.15; }
  52%  { opacity: 0.25; }
  63%  { opacity: 0.11; }
  76%  { opacity: 0.27; }
  88%  { opacity: 0.19; }
  100% { opacity: 0.22; }
`;

const LayerA = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse 110% 80% at 50% 55%,
    rgba(200, 70, 0, 0.35) 0%,
    rgba(160, 40, 0, 0.18) 45%,
    transparent 75%
  );
  animation: ${flickerA} 2.3s ease-in-out infinite;
`;

const LayerB = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    ellipse 85% 60% at 52% 58%,
    rgba(240, 100, 10, 0.28) 0%,
    rgba(180, 50, 0, 0.12) 50%,
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
