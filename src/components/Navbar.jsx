import "./Navbar.css";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
// import { UilUserCircle } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */

const Navbar = (props) => {
  const [openDrop, setOpenDrop] = useState(false);

  const handleDrop = () => {
    setOpenDrop(!openDrop);
    if (!openDrop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <nav className="nav">
      <div className="menu" onClick={handleDrop}>
        <div className="menustick"></div>
        <div className="menustick"></div>
        <div className="menustick"></div>
      </div>
      {openDrop && (
        <div className="sidemenu">
          <div className="menuheading">
            <button onClick={handleDrop}>
              <FontAwesomeIcon icon={faRemove} />
            </button>
            <h2>Browse Global Shop</h2>
          </div>
          <div className="bestsellers">
            <h2>Top Bestseller Brands</h2>
            <Link to="/productdetail/2">Apple</Link>
            <Link to="/productdetail/3">Samsung</Link>
            <Link to="/productdetail/5">Xiaomi</Link>
          </div>
          <div className="seperator"></div>
          <div className="otherproducts">
            <h2>Explore Other Products</h2>
            <Link to="/productdetail/7">Electronics</Link>
            <Link to="/productdetail/19">Food and Ingridients</Link>
            <Link to="/productdetail/15">Home Furnishing Materials</Link>
            <Link to="/productdetail/10">Clothing And Accesories</Link>
            <Link to="/productdetail/7">Furniture</Link>
            <Link to="/productdetail/8">Building Materials</Link>
          </div>
        </div>
      )}
      <div className="brandname">
        <Link to="/" className="company font4 mainlogo">
          <span className="mainlogo">TechTreasures</span>
        </Link>
      </div>
      <div className="cart">
        <div className="shoppingcart">
          {/* <UilUserCircle size="40" color="#424546" className="icon" /> */}
          <UilShoppingBag
            size="40"
            color="#424546"
            className="icon"
            onClick={props.onOpen}
          />

          <span className={`itemsamount ${props.scale ? "scale" : ""}`}>
            {props.amount}
          </span>
        </div>
      </div>

      <div className="lgmenu font2">
        <NavLink to="/" className="lgmenulink">
          Home
        </NavLink>
        <NavLink className="lgmenulink" to="/productdetail/17">
          Products
        </NavLink>
        <NavLink className="lgmenulink" to="/productdetail/14">
          Bestsellers
        </NavLink>
        <NavLink className="lgmenulink" to="/productdetail/14">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
