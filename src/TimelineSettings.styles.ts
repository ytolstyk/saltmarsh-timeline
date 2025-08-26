import styled from "styled-components";
import { lineBlue } from "./Timeline.styles";

export const TimelineSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TimelineSettingsFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RangeSelectorContainer = styled.div`
  margin-bottom: 1rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SelectedTagsCount = styled.div`
  background-color: ${lineBlue};
  border-radius: 50%;
  color: white;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;
