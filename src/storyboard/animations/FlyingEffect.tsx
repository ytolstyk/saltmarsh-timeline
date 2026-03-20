import styled, { keyframes } from "styled-components";

const floatClouds = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Cloud = styled.div<{ $top: string; $duration: string; $opacity: number }>`
  position: absolute;
  top: ${(p) => p.$top};
  width: 200px;
  height: 60px;
  background: radial-gradient(
    ellipse,
    rgba(255, 255, 255, ${(p) => p.$opacity}),
    transparent
  );
  border-radius: 50%;
  animation: ${floatClouds} ${(p) => p.$duration} linear infinite;
`;

export const FlyingEffect = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return (
    <Overlay>
      <Cloud $top="10%" $duration="15s" $opacity={0.3} />
      <Cloud $top="25%" $duration="20s" $opacity={0.2} />
      <Cloud $top="40%" $duration="12s" $opacity={0.25} />
    </Overlay>
  );
};
