import styled from "styled-components";
import { formContainerWrapperWidth, inputStyles } from "./EventForm.styles";

export const TimelineSettingsTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0;
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
    height: 2rem;
  }
`;
