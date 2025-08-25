import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1);
  }

  to {
    opacity: 1;
    transform: scale(0.9);
  }
`;

export const EventGroupTags = styled.div`
  margin-top: 0.5rem;

  > div:not(:last-child) {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
`;

export const EventGroupPosition = styled.div<{
  $percentTop: number;
  $isHighlighted: boolean;
}>`
  cursor: pointer;
  top: ${(props) => props.$percentTop}%;
  width: clamp(10rem, 100%, 25rem);
  position: absolute;
  transform: scale(0.95);
  transition: all 0.2s ease-in-out;
  animation: ${fadeIn} 0.2s ease-out;

  ${(props) => {
    if (props.$isHighlighted) {
      return `
        transform: scale(1);
        z-index: 10;
      `;
    }
  }}
`;
