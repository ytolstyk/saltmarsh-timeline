import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2px, 1px); }
  30% { transform: translate(2px, -1px); }
  50% { transform: translate(-1px, 2px); }
  70% { transform: translate(1px, -2px); }
  90% { transform: translate(-2px, -1px); }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  animation: ${shake} 0.5s ease-in-out infinite;
  animation-delay: 2s;
`;

export const BattleShake = ({ isActive }: { isActive: boolean }) => {
  if (!isActive) return null;
  return <Overlay />;
};
