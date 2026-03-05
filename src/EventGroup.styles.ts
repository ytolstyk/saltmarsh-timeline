import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
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
  width: clamp(10rem, 100%, 22rem);
  position: absolute;
  transition: all 0.18s ease-in-out;
  animation: ${fadeIn} 0.2s ease-out;

  ${(props) => {
    if (props.$isHighlighted) {
      return `
        transform: translateY(-2px);
        z-index: 10;
      `;
    }
  }}
`;
