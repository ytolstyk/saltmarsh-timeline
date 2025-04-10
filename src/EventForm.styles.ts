import styled, { css } from "styled-components";

export const formContainerWrapperWidth = "25rem";

export const inputStyles = css`
  height: 1.5rem;
  padding: 0.5rem;
`;

export const FormContainer = styled.div`
  width: ${formContainerWrapperWidth};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > input {
    ${inputStyles}
  }

  > textarea {
    height: 3rem;
    padding: 0.5rem;
  }

  > button {
    height: 2rem;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  > input {
    ${inputStyles}
    width: 100%;
  }

  > select {
    padding: 0.5rem;
  }
`;
