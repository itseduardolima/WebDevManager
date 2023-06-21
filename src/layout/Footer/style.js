import styled from "styled-components";

export const FooterContainer = styled.footer`
  margin-top: 20px;
  background-color: #6f5acd;
  color: #fff;
  padding: 3em;
  text-align: center;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;

  svg {
    font-size: 1.5em;
    cursor: pointer;
`;

export const Item = styled.li`
  margin: 0 1em;

  :hover {
    color: #FF93DD;
`;

export const CopyRight = styled.p`
  margin-top: 2em;

  span {
    font-weight: bold;
    color: #ff93dd;
  }
`;
