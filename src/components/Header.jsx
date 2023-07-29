import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="headerimg"></div>
      <div className="htext">
        <h1> All Products </h1>
        <h3>Delivered Worldwide In A Week</h3>
        <Link
          to="prodsall"
          className="shopnow"
          smooth={true}
          offset={10}
          duration={300}
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Header;
