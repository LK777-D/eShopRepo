import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Cart.css";
import CartItems from "./CartItems";
import {
  faShoppingCart,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */

const Cart = (props) => {
  return (
    <>
      {props.cartIsOpen && (
        <div className={props.cartIsOpen ? "shopcart animate" : "shopcart"}>
          <button onClick={props.onOpen} className="close">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carttext">
            <h3>
              Your Cart <FontAwesomeIcon icon={faShoppingCart} />
            </h3>
          </div>
          <CartItems
            prods={props.prods}
            onRemove={props.onRemove}
            quantity={props.quantity}
            cartIsOpen={props.cartIsOpen}
          />
          <div className="total">
            <span>Total:${props.total}</span>
          </div>
          <div className="cartbuttons">
            <button onClick={props.onOpen}>Close</button>
            <button>Order</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
