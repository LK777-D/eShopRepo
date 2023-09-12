/* eslint-disable react/prop-types */
import "./SecondaryNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const SecondaryNav = (props) => {
  const [filteredProd, setFilteredProd] = useState("");
  const searchData = props.searchData.map((product) => ({
    id: product.id,
    title: product.title.toString(),
  }));

  const handleSerach = (text) => {
    const filteredProducts = searchData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    return filteredProducts;
  };
  const filteredProducts = handleSerach(filteredProd).slice(0, 7);
  const clearInputHandler = () => {
    setFilteredProd("");
  };

  return (
    <div className="search">
      <input
        value={filteredProd}
        className="searchinput"
        name="text"
        type="text"
        placeholder="Browse..."
        onChange={(e) => setFilteredProd(e.target.value)}
      />
      {filteredProd.length > 0 && (
        <div className="searchresult">
          <h4>Search Results For {filteredProd} ...</h4>
          {filteredProducts.map((item) => (
            <Link
              to={`/productdetail/${item.id}`}
              key={item.id}
              onClick={clearInputHandler}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
      <FontAwesomeIcon icon={faSearch} className="icon srch" />
    </div>
  );
};

export default SecondaryNav;
