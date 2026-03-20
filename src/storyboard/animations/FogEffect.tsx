import styled, { keyframes } from "styled-components";

const drift = keyframes`
  0% { transform: translateX(-10%); opacity: 0.3; }
  50% { transform: translateX(10%); opacity: 0.5; }
  100% { transform: translateX(-10%); opacity: 0.3; }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(180, 190, 200, 0.3) 25%,
    rgba(160, 170, 180, 0.4) 50%,
    rgba(180, 190, 200, 0.3) 75%,
    transparent 100%
  );
  animation: ${drift} 12s ease-in-out infinite;
`;

export const FogEffect = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return <Overlay />;
};
