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

export const Divider = styled.hr`
  margin: 1rem 3rem 0.25rem 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
`;

export const HeaderCounter = styled.div`
  flex: 0;
`;

export const EventGroupHeader = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const EventGroupText = styled.div`
  font-size: 0.75rem;
  white-space: pre-line;
`;

export const EventGroupDate = styled.div`
  font-size: 0.75rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
`;

export const Group = styled.div<{ $showHover: boolean }>`
  cursor: pointer;

  ${(props) => {
    if (props.$showHover) {
      return `
        &:hover {
          background-color: #444;
        }
      `;
    }
  }}
`;

export const EventGroupTags = styled.div`
  margin-top: 0.5rem;

  > div:not(:last-child) {
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }
`;

export const EventGroupTag = styled.div<{ $isSelected: boolean }>`
  display: inline-block;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.$isSelected ? "rgb(48, 117, 43)" : "rgb(90, 90, 90)"};
  border: 1px solid rgb(139, 139, 139);
  font-size: 0.75rem;
  text-transform: capitalize;
`;

export const EventGroupWrapper = styled.div<{
  $percentLeft: number;
  $isHighlighted: boolean;
}>`
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
  transition: all 0.2s ease-in-out;
  animation: ${flyIn} 0.3s ease-out;

  ${(props) => {
    if (props.$isHighlighted) {
      return `
        transform: translateX(-50%) scale(1);
        z-index: 10;
      `;
    }
  }}
`;
