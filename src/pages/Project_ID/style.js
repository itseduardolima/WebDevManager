import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin-top: 3rem;
  margin: auto;
`;

export const Details = styled.div`
  margin-top: 100px;
`;

export const ProjectDetails = styled.div`
  width: 100%;
  padding: 3em;

  @media only screen and (max-width: 414px) {
    padding: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Subtitle = styled.h2`
  margin-bottom: 0.5em;
`;

export const P = styled.p`
  margin-bottom: 0.5em;
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const DetailsContainer = styled.div`
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 1.2em;
  margin-bottom: 1.2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Services = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  row-gap: 3rem;
  column-gap: 1rem;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 912px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 250px;
  }
`;

export const Btn = styled.button`
  border-radius: 3px;
  background-color: #6f5acd;
  color: #fff;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: 0.5s;
  border: none;
  cursor: pointer;
  max-height: 40px;

  :hover {
    color: #ff93dd;
    background-color: #523dad;
  }

  @media only screen and (max-width: 540px) {
    font-size: 0.6em;
  }
`;

export const Form = styled.div`
  width: 100%;
`;

/*














*/
