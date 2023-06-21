import styled from "styled-components";

export const MainFeatures = styled.section`
  width: 100%;
  min-height: 50vh;
  padding: 100px;
  background-color: #6f5acd;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 912px) {
    padding: 10px;
  }

  @media only screen and (max-width: 716px) {
    padding: 5px;
  }

  @media only screen and (max-width: 540px) {
    padding: 10px;
  }
`;

export const ContendTitle = styled.div``;

export const Title = styled.h1`
  margin-top: 10px;
  color: #e8e2ff;
  font-weight: bold;
  font-size: 2em;

  @media only screen and (max-width: 540px) {
    font-size: 1.5em;
  }
`;
export const Grid = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;

  @media only screen and (max-width: 1793px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HomeCard = styled.div`
  margin: auto;
  border-radius: 10px;
  background: #2a139277;
  height: 470px;
  width: 400px;

  @media only screen and (max-width: 1793px) {
    height: 330px;
    width: 600px;
  }

  @media only screen and (max-width: 1399px) {

    height: 250px;
    width: 450px;
  }

  @media only screen and (max-width: 912px) {
    height: 300px;
    width: 350px;
  }

  @media only screen and (max-width: 716px) {
    height: 230px;
    width: 250px;
  }

  @media only screen and (max-width: 540px) {
    height: 230px;
    width: 350px;
  }

  @media only screen and (max-width: 371px) {
    height: 290px;
    width: 250px;
  }
`;

export const ContendCard = styled.div`
  padding: 30px;
`;

export const Subtitle = styled.h3`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  font-size: 1.5em;
  color: #ff93dd;

  @media only screen and (max-width: 1399px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 540px) {
    font-size: 1em;
  }
`;

export const P = styled.p`
  margin-top: 30px;
  font-size: 1em;
  color: #e8e2ff;

  @media only screen and (max-width: 1399px) {
    margin-top: 10px;
    font-size: 0.7em;
  }

  @media only screen and (max-width: 716px) {
    margin-top: 10px;
    font-size: 0.5em;
  }

  @media only screen and (max-width: 540px) {
    font-size: 0.6em;
  }
`;
