import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import CartItems from "./CartItems";
import {
  faShoppingCart,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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
      {props.cartIsOpen && (
        <>
          <div className="backdrop"></div>
          <div className={props.cartIsOpen ? "shopcart animate" : "shopcart"}>
            <button onClick={props.onOpen} className="close">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="carttext">
              <h4>Your Shopping Cart </h4>
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
              <ButtonPrimary>Order</ButtonPrimary>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
