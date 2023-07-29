import "./CartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
/* eslint-disable react/prop-types */

const CartItems = (props) => {
  return (
    <>
      {props.prods.map((product) => (
        <div key={product.id} className="singlecartprod">
          <div className="prodtitle">{product.title}</div>
          <div className="infoimgwrapper">
            <button onClick={() => props.onRemove(product)}>
              <FontAwesomeIcon icon={faRemove} />
            </button>
            <div className="cartimage">
              <img src={product.images[1]} />
            </div>

            <div className="info">
              <div>
                <span>Brand:</span>
                {product.brand}
              </div>
              <div>
                <span>Price:</span>${product.price}
              </div>
            </div>
            <div>
              <span>x{product.quantity}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default CartItems;
