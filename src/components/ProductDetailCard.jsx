import "./ProductDetailCard.css";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const ProductDetailCard = (props) => {
  return (
    <div className="detailscard">
      <div className="cardcontent">
        <div className="imgcont">
          <img src={props.images} />
        </div>
        <div className="productinfocont">
          <div className="productinfo">
            <h2>{props.title}</h2>
            <span>
              <span className="bold">Brand :</span> {props.brand}
            </span>
            <p>{props.description}</p>
          </div>
          <div className="priceinfo">
            <span>
              <span className="bold"> Price : $</span>
              {props.price}
            </span>
            <span>
              <span className="bold">Discount:</span>

              <span className="percent">%{props.discountPercentage}</span>
            </span>
          </div>
        </div>
        <div className="buttons">
          <button>
            <Link to="/">Cancel</Link>
          </button>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
