import styled from "styled-components";

export const Introduction = styled.section`
  height: 100%;
  width: 100%;
  background-color: #e8e2ff;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 912px) {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 600px;

  @media only screen and (max-width: 1280px) {
    width: 500px;
  }

  @media only screen and (max-width: 912px) {
    margin-top: 50px;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const ContainerContend = styled.div`
  width: 50%;
  padding: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 912px) {
    width: 100%;
  }
`;

export const Contend = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.7em;
  font-weight: bold;
  color: #6f5acd;

  @media only screen and (max-width: 1280px) {
    font-size: 1em;
  }

  @media only screen and (max-width: 912px) {
    width: 100%;
  }

  @media only screen and (max-width: 414px) {
    font-size: 1em;
  }
`;

export const P = styled.p`
  width: 80%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #6f5acd;
  color: #2b1392;

  @media only screen and (max-width: 1280px) {
    width: 100%;
    font-size: 0.6em;
  }

  @media only screen and (max-width: 414px) {
    font-size: 0.7em;
    border-bottom: 1px solid #6f5acd;
  }
`;
