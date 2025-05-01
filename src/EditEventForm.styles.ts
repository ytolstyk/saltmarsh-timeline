import styled, { css } from "styled-components";

const inputStyles = css`
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f8f9fa;
  color: #000;
  font-size: 1rem;
  border: 1px solid #ced4da;
`;

export const EditEventFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextInput = styled.input`
  ${inputStyles};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  > button {
    cursor: pointer;
    padding: 0.5rem 1rem;
  }
`;

export const EditTextArea = styled.textarea`
  ${inputStyles};

  min-height: 5rem;
  font-size: 0.75rem;
`;
