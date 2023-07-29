import "./OrderHelper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCreditCard,
  faDollar,
  faHome,
  faLaptop,
  //   faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
const OrderHelper = () => {
  return (
    <section className="orderhelper">
      <h2>How To Shop Online ?</h2>
      <div className="step">
        <FontAwesomeIcon icon={faLaptop} className="stepicon" />
        <span>Find Product You Want</span>
      </div>
      <div className="step">
        <FontAwesomeIcon icon={faCartShopping} className="stepicon" />
        <span>Click Add To Cart</span>
      </div>
      <div className="step">
        <FontAwesomeIcon icon={faCreditCard} className="stepicon" />
        <span>Open Cart And Proccess To Payment</span>
      </div>
      <div className="step">
        <FontAwesomeIcon icon={faHome} className="stepicon" />
        <span>Write Adress You Want The Product To be Delivered</span>
      </div>
    </section>
  );
};

export default OrderHelper;
