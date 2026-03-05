import styled from "styled-components";

export const Day = styled.div<{ $isSelected?: boolean }>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  aspect-ratio: 1 / 1;
  width: 100%;
  font-size: 0.78rem;
  font-weight: ${(props) => (props.$isSelected ? 700 : 400)};
  color: ${(props) => (props.$isSelected ? "#fff" : "inherit")};
  background-color: ${(props) => (props.$isSelected ? "#3b82f6" : "transparent")};
  transition: background-color 0.14s ease, color 0.14s ease, box-shadow 0.14s ease;
  box-shadow: ${(props) => (props.$isSelected ? "0 1px 4px rgba(59,130,246,0.4)" : "none")};

  &:hover {
    background-color: ${(props) => (props.$isSelected ? "#2563eb" : "#dbeafe")};
    color: ${(props) => (props.$isSelected ? "#fff" : "#1d4ed8")};
  }
`;
