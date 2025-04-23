import styled from "styled-components";

export const CurrentEventCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 15rem;
  max-height: 15rem;
  overflow: scroll;
  background-color: #333;
`;

export const CurrentCardHeader = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const CurrentCardText = styled.div`
  flex: 1;
  font-size: 0.75rem;
`;

export const CurrentCardDate = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const CurrentCardDeleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
