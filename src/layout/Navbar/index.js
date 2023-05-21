import { Link } from "react-router-dom";
import "../../layout/Navbar/style.css";
import logo from "../../image/costs_logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="Costs" className="image list" />
      </Link>
      <ul className="list">
        <li className="item">
          <Link to="/">HOME</Link>
        </li>
        <li className="item">
          <Link to="/newproject">NOVO PROJETO</Link>
        </li>
        <li className="item">
          <Link to="/projects">PROJETOS</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
