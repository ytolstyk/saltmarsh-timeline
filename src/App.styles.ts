import styled from "styled-components";

export const remInPixels = 16;

export const Title = styled.h1`
  font-family: "Booter";
  margin: 0;
  font-size: clamp(1.1rem, 2.5vw, 1.75rem);
  line-height: 1;
  color: #0063ff;
  letter-spacing: 0.01em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  min-width: 0;
  gap: 0.5rem;
`;

export const ActionButtonContainer = styled.div`
  margin-top: 1.5rem;
`;
