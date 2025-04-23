import styled from "styled-components";

export const TagLabel = styled.label<{ $isChecked: boolean }>`
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  color: rgb(29, 33, 38);
  background-color: ${(props) =>
    props.$isChecked ? "rgb(107, 187, 95)" : "rgb(158, 178, 197)"};
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.05rem;
  transition: background-color 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e2e6ea;
  }

  > input {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  > button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
