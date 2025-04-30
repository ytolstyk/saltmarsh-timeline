import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  max-width: 90%;
  position: relative;
  color: #222;
  max-height: 80vh;
  overflow-y: auto;

  animation: ${fadeIn} 0.2s ease-in-out;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: black;
`;
