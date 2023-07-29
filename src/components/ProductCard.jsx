import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import Rating from "../UI/Rating";
/* eslint-disable react/prop-types */

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="cardcontent">
        <div className="imagecontainer">
          <Carousel images={props.image} className="carousel2" />
        </div>

        <div className="categorycount">
          {/* <span>
            {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
          </span> */}

          <h4>{props.title}</h4>
        </div>

        <div className="pricebtn">
          <span className="price">${props.price}</span>
          <span className="sale">-{props.discountPercentage}%</span>
          <span>
            <Rating rating={props.rating} />
          </span>
          <div>
            <br />
          </div>
        </div>
        <button className="prodbtn" onClick={() => props.onAdd(props.product)}>
          Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
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
