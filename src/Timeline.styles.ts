import styled, { keyframes } from "styled-components";

const dotSize = 16;
const dotBorder = 3;
export const dotFullSize = dotSize + dotBorder * 2;
const groupDotSize = "1.5rem";
export const lineHeight = 1400;

const lineBlue = "#0063ff";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const TimelineWrapper = styled.div`
  margin-bottom: 20rem;
`;

export const LineWrapper = styled.div<{ $noHeight?: boolean }>`
  align-content: center;
  position: relative;
  display: flex;
  height: ${(props) => (props.$noHeight ? "auto" : `${lineHeight}px`)};
  justify-content: center;
`;

export const LineLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  flex: 1;
  margin-right: 0.5rem;
  height: 100%;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  height: 100%;
  width: 0.25rem;
  background-color: ${lineBlue};
  position: relative;
`;

export const LineRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  flex: 1;
  margin-left: 0.5rem;
  height: 100%;
`;

export const LineDot = styled.div<{
  $percentTop: number;
  $isActive: boolean;
  $isGroup: boolean;
}>`
  font-size: 0.75rem;
  font-weight: 800;
  color: ${lineBlue};
  text-align: center;
  cursor: pointer;
  top: ${(props) => props.$percentTop}%;
  position: absolute;
  height: ${(props) => (props.$isGroup ? groupDotSize : `${dotSize}px`)};
  width: ${(props) => (props.$isGroup ? groupDotSize : `${dotSize}px`)};
  border-radius: 1rem;
  background-color: ${(props) => (props.$isActive ? lineBlue : "#fff")};
  border: ${dotBorder}px solid ${lineBlue};

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
