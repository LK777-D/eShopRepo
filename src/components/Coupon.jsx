import "./Coupon.css";
import { useState } from "react";
import ButtonPrimary from "../UI/ButtonPrimary";

const Coupon = () => {
  const [coupon, setCoupon] = useState("");

  const couponGeneratorHandler = () => {
    if (!coupon) {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const length = 7;
      let newCoupon = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newCoupon = newCoupon + characters[randomIndex];
      }
      setCoupon(newCoupon);
    }
  };

  return (
    <>
      <div className="coupon">
        <h3 className="centered font4">
          Use Our Coupon To Shop For The Best Price
        </h3>

        <div className="couponbtn ">
          <ButtonPrimary
            className="font5 borderhover "
            onClick={couponGeneratorHandler}
          >
            Generate Coupon
          </ButtonPrimary>
        </div>
        <div className={`generatedcoupon font4 ${coupon ? "show" : ""}`}>
          {coupon && <span>Your Coupon : {coupon}</span>}
        </div>
      </div>
      <div className="productsdivide"></div>
    </>
  );
};

export default Coupon;
