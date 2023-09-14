import "./Footer.css";
import ButtonPrimary from "../UI/ButtonPrimary";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer font4" id="footer">
      <div className="newsletterwrapper">
        <h4>MultiMart Newsletter</h4>
        <div className="subscribe">
          <input type="text" placeholder="example@email.com" />
          <ButtonPrimary>Subscire</ButtonPrimary>
        </div>
      </div>
      <div className="font8 footernav">
        <Link to="header" smooth={true}>
          Home
        </Link>
        <Link to="sales" smooth={true}>
          Sales
        </Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div>
        <p className="font8">© MultiMart. 2023 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
