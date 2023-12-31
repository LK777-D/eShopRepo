/* eslint-disable react/prop-types */
import "./Search.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [filteredProd, setFilteredProd] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://dummyjson.com/products";

      const response = await fetch(url);
      const productsData = await response.json();

      if (productsData.products) {
        setDataSearch(productsData.products);
      }
    };
    fetchProducts();
  }, []);
  const dataForSearching = dataSearch.map((product) => ({
    id: product.id,
    title: product.title.toString(),
  }));

  const handleSerach = (text) => {
    const filteredProducts = dataForSearching.filter((item) =>
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
      <div className="inputwrapper">
        <input
          value={filteredProd}
          className="searchinput"
          name="text"
          type="text"
          placeholder="Browse..."
          onChange={(e) => setFilteredProd(e.target.value)}
        />

        <FontAwesomeIcon icon={faSearch} className="icon srch" />
      </div>
      {filteredProd.length > 0 && (
        <div className="searchresults font4">
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
    </div>
  );
};

export default Search;
