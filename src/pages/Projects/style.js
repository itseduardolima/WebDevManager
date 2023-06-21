import styled from "styled-components";

export const Container = styled.div`
  margin-top: 130px;
  min-height: 100vh;
  width: 100%;
  padding: 2em;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
`;

export const Dashboard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  row-gap: 3rem;
  column-gap: 2rem;

  @media only screen and (max-width: 1297px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 912px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 708px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 360px) {
    grid-auto-rows: 250px;
  }
`;

export const NoProjects = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Img = styled.img`
  margin-top: 5rem;
  width: 500px;
`;

