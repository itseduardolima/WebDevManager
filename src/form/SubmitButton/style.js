import styled from "styled-components";

export const SubmitBtn = styled.button`
  border-radius: 3px;
  background-color: #6f5acd;
  color: #fff;
  padding: 0.7em 1.2em;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
  border: none;

  :hover {
    color: #ff93dd;
    background-color: #523dad;
  }

  @media only screen and (max-width: 540px) {
    font-size: 0.8em;
    padding: 0.7em 1.2em;
  }
`;
