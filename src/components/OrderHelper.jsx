import "./OrderHelper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCreditCard,
  faHome,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";

const OrderHelper = () => {
  return (
    <>
      <h2 className="helperheading font4">How To Shop Online ?</h2>
      <section className="orderhelper font4">
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
          <span>Open Cart And Proceed To Payment</span>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faHome} className="stepicon" />
          <span>Write Adress You Want The Product To be Delivered</span>
        </div>
      </section>
    </>
  );
};

export default OrderHelper;
