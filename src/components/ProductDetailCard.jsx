import Button from "../UI/Button";
import "./ProductDetailCard.css";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const ProductDetailCard = (props) => {
  return (
    <div className="detailscard font4">
      <div className="cardcontent ">
        <h2>{props.title}</h2>
        <div className="imgcont">
          <img src={props.images} />
        </div>
        <div className="productinfocont">
          <div className="productinfo">
            <span>
              <span className="bold">Brand :</span> {props.brand}
            </span>
            <p className="font5">{props.description}</p>
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
          <Button className="font4">Cancel</Button>
          <Button className="font4">Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
