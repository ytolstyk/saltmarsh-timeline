import styled from "styled-components";

export const remInPixels = 16;

export const Title = styled.h1`
  font-family: "Booter";
  margin: 0;
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ActionButtonContainer = styled.div`
  margin-top: 3rem;
`;
