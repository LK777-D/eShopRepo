import "./CartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */

const CartItems = (props) => {
  return (
    <>
      {props.prods.map((product) => (
        <div key={product.id} className="itemwrapper">
          <div className="cartimg">
            <img src={product.images[0]} />
          </div>
          <div className="info">
            <span className="prodname font8">{product.title}</span>
            <span className="quantity">Amount : {product.quantity}</span>
          </div>
          <div className="rightdiv">
            <span>{product.price}$</span>
            <button
              className="removebtn"
              onClick={() => props.onRemove(product)}
            >
              <FontAwesomeIcon icon={faRemove} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default CartItems;
