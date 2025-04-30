import styled, { css } from "styled-components";
import { formContainerWrapperWidth, inputStyles } from "./EventForm.styles";

const buttonStyles = css`
  height: 2rem;
  cursor: pointer;
`;

export const TimelineSettingsContainer = styled.div`
  width: ${formContainerWrapperWidth};

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TimelineSettingsFormRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  > input {
    flex: 1;
    ${inputStyles};
  }

  > button {
    ${buttonStyles}
  }

  > label {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  flex: 1;

  > button {
    ${buttonStyles}
  }
`;

export const FullWidthButton = styled.button`
  ${buttonStyles};
  flex: 1;
  width: 100%;
`;

export const NeedsAttention = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 0.75rem;
  width: 0.75rem;
  background-color: red;
  border: 1px solid white;
  border-radius: 0.5rem;
  transform: translateX(50%) translateY(-50%);
`;
