import styled from "styled-components";

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
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  max-width: 800px;
  width: 100%;
  position: relative;
  color: #222;
  max-height: 80vh;
  overflow-y: auto;
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
