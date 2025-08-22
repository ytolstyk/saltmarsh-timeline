import styled from "styled-components";

export const CurrentGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  min-width: 30rem;
  max-width: 50rem;
  gap: 2rem;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CurrentCardHeader = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const CurrentCardText = styled.div`
  flex: 1;
  font-size: 1rem;
  white-space: pre-line;
`;

export const CurrentCardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TagTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CurrentCardDate = styled.div`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
