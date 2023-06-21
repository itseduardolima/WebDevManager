import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 90vh;
  margin: 120px auto;
  padding: 3em;

  @media only screen and (max-width: 912px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const P = styled.p`
  margin-top: 20px;
  color: #7b7b7b;
`;
