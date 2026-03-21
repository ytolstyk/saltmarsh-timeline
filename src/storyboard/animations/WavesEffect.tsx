import styled, { keyframes } from "styled-components";

const swell = keyframes`
  0%   { transform: rotate(-0.8deg) translateY(0px) scale(1.0); }
  25%  { transform: rotate(0deg) translateY(-6px) scale(1.004); }
  50%  { transform: rotate(0.8deg) translateY(0px) scale(1.008); }
  75%  { transform: rotate(0deg) translateY(6px) scale(1.004); }
  100% { transform: rotate(-0.8deg) translateY(0px) scale(1.0); }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  animation: ${swell} 8s ease-in-out infinite;
  transform-origin: center center;
`;

export const WavesEffect = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return <Overlay />;
};
