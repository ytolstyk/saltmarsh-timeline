import styled, { css, keyframes } from "styled-components";

const uploadWidth = "40rem";

const buttonStyles = css`
  height: 2rem;
  cursor: pointer;
`;

const bounce = keyframes`
  0% {
    transform: rotate(90deg) scale(1, 1.2) translateY(1rem);
  }
  50% {
    transform: rotate(90deg) scale(1);
  }
  100% {
    transform: rotate(90deg) scale(1, 1.2) translateY(1rem);
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: ${uploadWidth};
  margin: 0 auto;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  > button {
    ${buttonStyles}
  }
`;

export const ImportControls = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;

  > button {
    ${buttonStyles}
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: -2rem;

  animation: ${bounce} 1s ease-out infinite;
`;

export const Bold = styled.div<{ $inline?: boolean }>`
  font-weight: bold;

  ${(props) => (props.$inline ? "display: inline-block;" : "")}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    padding: 0.5rem;
    text-align: left;
    border: 1px solid #dee2e6;
    white-space: pre-line;
  }

  th {
    background-color: #f8f9fa;
  }
`;

export const SuccessMessage = styled.div`
  padding: 0.5rem 1rem;
  background-color: #d4edda;
  border-radius: 0.5rem;
  border: 1px solid rgb(146, 186, 156);
`;
