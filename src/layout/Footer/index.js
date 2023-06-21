import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { CopyRight, FooterContainer, Item, SocialList } from "./style";

function Footer() {
  return (
    <FooterContainer className="inset-x-0 bottom-0">
      <SocialList>
        <Item>
          <FaFacebook />
        </Item>
        <Item>
          <FaInstagram />
        </Item>
        <Item>
          <a href="https://github.com/itseduardolima/WebDevManager">
            <FaGithub />
          </a>
        </Item>
      </SocialList>
      <CopyRight>
        <span>WebDevManager</span> &copy; 2023
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;
