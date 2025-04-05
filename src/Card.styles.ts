import styled, { keyframes } from "styled-components";

const flyIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(100rem) scale(0.1);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.9);
  }
`;

export const CardWrapper = styled.div<{
  $percentLeft: number;
  $isHighlighted: boolean;
}>`
  cursor: pointer;
  transform: translateX(-50%) scale(0.9);
  left: ${(props) => props.$percentLeft}%;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 10rem;
  max-height: 10rem;
  overflow: scroll;
  position: absolute;
  background-color: #333;

  ${(props) => {
    if (props.$isHighlighted) {
      return `
        transform: translateX(-50%) scale(1);
        z-index: 10;
      `;
    }
  }}

  transition: all 0.2s ease-in-out;
  animation: ${flyIn} 0.3s ease-out;
`;

export const CardHeader = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const CardText = styled.div`
  font-size: 0.75rem;
`;

export const CardDate = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
`;
