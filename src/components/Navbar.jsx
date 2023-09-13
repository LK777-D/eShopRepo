import "./Navbar.css";
import { UilShoppingBag } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
// import { UilUserCircle } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { UilSignin } from "@iconscout/react-unicons";

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
        <>
          <div className="backdrop" onClick={handleDrop}></div>
          <div className="sidemenu">
            <h2 className="logoside font4">MultiMart</h2>
            <div className="sidemenuseperator"></div>
            <div className="websitenav font4">
              <h2>Navigation</h2>
              <div className="sidemenuseperator"></div>
              <Link>Home</Link>
              <Link>Sales</Link>
              <Link>Blog</Link>
              <Link>Contact</Link>
            </div>
            <div className="sidenavlogin font4">
              {!props.user ? (
                <Link
                  to="/authentication"
                  onClick={handleDrop}
                  className="font4"
                >
                  Log In
                </Link>
              ) : (
                <Link onClick={props.logOut} to="/authentication">
                  Log Out
                </Link>
              )}
              <UilSignin size="35" className="iconlogin" />
            </div>
          </div>
        </>
      )}
      <div className="brandname">
        <Link to="/" className="company font4 mainlogo">
          <span className="mainlogo">MultiMart</span>
        </Link>
      </div>

      <div className="cart">
        <span>{props.user?.email}</span>
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
        <div>
          {!props.user ? (
            <Link to="authentication" className="font4">
              Log In
            </Link>
          ) : (
            <Link onClick={props.logOut} to="/authentication">
              Log Out
            </Link>
          )}
        </div>
      </div>

      <div className="lgmenu font2">
        <NavLink to="/" className="lgmenulink">
          Home
        </NavLink>
        <LinkScroll className="lgmenulink" to="sales">
          Sales
        </LinkScroll>
        <NavLink className="lgmenulink" to="/blog">
          Blog
        </NavLink>
        <LinkScroll className="lgmenulink" to="/productdetail/14">
          Contact
        </LinkScroll>
      </div>
    </nav>
  );
};

export default Navbar;
