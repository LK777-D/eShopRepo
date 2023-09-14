import "./Header.css";

import Search from "./Search";

const Header = () => {
  return (
    <div className="header headerimg" id="header">
      <div className="heading ">
        <h3 className="font4 ">Welcome to MultiMart</h3>
        <h4 className="font4 ">Your Ultimate Shopping Destination</h4>
        <Search />
      </div>
    </div>
  );
};

export default Header;
