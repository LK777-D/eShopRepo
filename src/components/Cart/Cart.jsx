import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";

import CartItems from "./CartItems";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ButtonPrimary from "../../UI/ButtonPrimary";
/* eslint-disable react/prop-types */

const Cart = (props) => {
  if (props.cartIsOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      {props.cartIsOpen && <div className="cartbackdrop"></div>}
      <div
        className={`shopcart ${
          props.cartIsOpen ? "cartslidein" : "cartslideout"
        }`}
      >
        <button onClick={props.onOpen} className="close">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="carttext">
          <h4>Your Shopping Cart ({props.amount}) </h4>
        </div>
        <div className="itemsincart">
          <CartItems
            prods={props.prods}
            onRemove={props.onRemove}
            quantity={props.quantity}
            cartIsOpen={props.cartIsOpen}
          />
        </div>
        <div className="cartseperator"></div>
        <div className="total">
          <span>Total:${props.total}</span>
        </div>
        <div className="cartbuttons">
          <ButtonPrimary onClick={props.onOpen}>Close</ButtonPrimary>
          <ButtonPrimary onClick={props.orderHandler}>Order</ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default Cart;
