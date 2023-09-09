import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Rating from "../UI/Rating";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="imagecontainer">
        <img src={props.image} />
      </div>
      <Link to={props.to}>
        <div className="textinfo">
          <span className="font1 title">{props.title}</span>
          <span>
            <Rating rating={props.rating} />
          </span>
          <div className="pricesale">
            <span className="price">${props.price}</span>
            <span className="sale">-{props.discountPercentage}%</span>
          </div>
        </div>
      </Link>
      <button
        className="prodbtn font1"
        onClick={() => props.onAdd(props.product)}
      >
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default ProductCard;

// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": { "rate": 3.9, "count": 120 }
// },
