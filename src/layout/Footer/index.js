import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

import "../../layout/Footer/style.css";
function Footer() {
  return (
    <footer className="footer inset-x-0 bottom-0">
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <a href="https://github.com/itseduardolima/WebDevManager">
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className="copy_right">
        <span>WebDevManager</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
