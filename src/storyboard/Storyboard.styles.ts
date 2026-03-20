import styled from "styled-components";

export const ScrollContainer = styled.div`
  height: 100vh;
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

export const BackButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.85rem;
  backdrop-filter: blur(4px);
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export const NavDots = styled.div`
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const NavDot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: ${(p) =>
    p.$active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.2)"};
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    transform: scale(1.4);
    background: rgba(255, 255, 255, 0.7);
  }
`;
