import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "../../layout/Footer/style.css";
function Footer() {
  return (
    <footer className="footer  inset-x-0 bottom-0">
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className="copy_right">
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
