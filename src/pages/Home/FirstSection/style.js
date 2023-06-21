import styled from "styled-components";

export const Welcome = styled.section`
  padding: 100px;
  align-items: center;
  background-color: #e8e2ff;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 912px) {
    padding: 40px;
    flex-direction: column;
  }

  @media only screen and (max-width: 540px) {
    padding: 20px;
  }

  @media only screen and (max-width: 414px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 912px) {
    width: 100%;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
  }
`;
export const Content = styled.div``;

export const Title = styled.h1`
  margin-top: 100px;
  color: #6f5acd;
  font-weight: bold;
  font-size: 2.5em;

  @media only screen and (max-width: 1550px) {
    font-size: 2em;
  }

  @media only screen and (max-width: 912px) {
    width: 100%;
    font-size: 2em;
  }

  @media only screen and (max-width: 540px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
    font-size: 1.5em;
  }
`;

export const P = styled.p`
  width: 65%;
  font-size: 1.3em;
  margin-top: 10px;
  margin-bottom: 30px;
  color: #2b1392;

  @media only screen and (max-width: 1550px) {
    margin-top: 30px;
    width: 70%;
    font-size: 1em;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 30px;
    width: 80%;
    font-size: 1em;
  }

  @media only screen and (max-width: 912px) {
    width: 100%;
    margin-top: 30px;
    font-size: 1.3em;
  }

  @media only screen and (max-width: 540px) {
    font-size: 0.8em;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
    margin-top: 30px;
    font-size: 0.9em;
  }

  @media only screen and (max-width: 280px) {
    font-size: 0.5em;
  }
`;

export const HomeImg = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 912px) {
    margin-top: 70px;
    width: 100%;
  }

  @media only screen and (max-width: 414px) {
    margin-top: 70px;
    width: 100%;
  }
`;

export const Image = styled.img`
  margin-top: 50px;
  width: 600px;

  @media only screen and (max-width: 1550px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 912px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 540px) {
    margin-top: 10px;
    max-width: 300px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 280px) {
    max-width: 300px;
  }
`;
