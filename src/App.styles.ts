import styled from "styled-components";

export const remInPixels = 16;

export const Container = styled.div`
  display: grid;
  width: 100%;
`;

export const AppFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  margin-bottom: 10rem;
`;

export const Title = styled.h1`
  font-family: "Booter";
  text-align: center;
  margin: 0;
  font-size: 5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2rem;

  > button {
    cursor: pointer;
    padding: 0.75rem 1rem;
  }
`;
