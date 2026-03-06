import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(calc(-50% + 6px));
  }

  to {
    opacity: 1;
    transform: translateY(-50%);
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
  $zIndex: number;
  $side: "left" | "right";
}>`
  cursor: pointer;
  top: ${(props) => props.$percentTop}%;
  transform: translateY(-50%);
  width: clamp(10rem, 100%, 22rem);
  position: absolute;
  z-index: ${(props) => props.$zIndex};
  transition: transform 0.18s ease-in-out, box-shadow 0.18s ease-in-out;
  animation: ${fadeIn} 0.2s ease-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  ${(props) =>
    props.$side === "left"
      ? `
    &::before {
      right: -9px;
      transform: translateY(-50%);
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      border-left: 9px solid ${props.$isHighlighted ? "#0063ff40" : "#dee2e6"};
    }
    &::after {
      right: -8px;
      transform: translateY(-50%);
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid white;
    }
  `
      : `
    &::before {
      left: -9px;
      transform: translateY(-50%);
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      border-right: 9px solid ${props.$isHighlighted ? "#0063ff40" : "#dee2e6"};
    }
    &::after {
      left: -8px;
      transform: translateY(-50%);
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid white;
    }
  `}

  ${(props) => {
    if (props.$isHighlighted) {
      return `
        transform: translateY(calc(-50% - 2px));
        z-index: 1000;
      `;
    }
  }}
`;
