import styled from "styled-components";

export const Day = styled.div<{ $isSelected?: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  aspect-ratio: 1 / 1;
  width: 100%;

  background-color: ${(props) =>
    props.$isSelected ? "#64a0ff" : "transparent"};

  &:hover {
    background-color: #cde2ff;
  }
`;
