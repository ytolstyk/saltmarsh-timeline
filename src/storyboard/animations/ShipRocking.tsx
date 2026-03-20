import styled, { keyframes } from "styled-components";

const rock = keyframes`
  0%, 100% { transform: rotate(-1.5deg); }
  50% { transform: rotate(1.5deg); }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  animation: ${rock} 4s ease-in-out infinite;
  transform-origin: center bottom;
`;

export const ShipRocking = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return <Overlay />;
};
