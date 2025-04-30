import styled, { keyframes } from "styled-components";

const dotSize = "0.75rem";
const groupDotSize = "1.25rem";
const eventLineHeight = "12rem";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1) translateY(-50%);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(-50%);
  }
`;

export const LineWrapper = styled.div`
  align-content: center;
  position: relative;
  margin: 2rem 5rem;
`;

export const LineTop = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: ${eventLineHeight};
  margin-bottom: 1rem;
`;

export const Line = styled.div`
  border-radius: 1rem;
  height: 1rem;
  background-color: white;
  position: relative;
`;

export const LineBottom = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  height: ${eventLineHeight};
  margin-top: 1rem;
`;

export const EmptyMessageWrapper = styled.div`
  margin: 2rem auto 0;
  text-align: center;
  max-width: 30rem;

  > button {
    margin-top: 1rem;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }
`;

export const LineDot = styled.div<{
  $percentLeft: number;
  $isActive: boolean;
  $isGroup: boolean;
}>`
  font-size: 0.75rem;
  font-weight: 600;
  color: black;
  text-align: center;
  cursor: pointer;
  left: ${(props) => props.$percentLeft}%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  height: ${(props) => (props.$isGroup ? groupDotSize : dotSize)};
  width: ${(props) => (props.$isGroup ? groupDotSize : dotSize)};
  border-radius: 1rem;
  background-color: ${(props) => (props.$isActive ? "#222" : "#ddd")};
  border: 2px solid #222;

  ${(props) => {
    if (props.$isActive) {
      return `
        z-index: 10;
        color: white;
      `;
    }
  }};

  transition: all 0.2s ease-in-out;
  animation: ${fadeIn} 0.3s ease-out;
`;
