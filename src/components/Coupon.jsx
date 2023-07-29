import "./Coupon.css";
import { useState } from "react";

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
    <div className="coupon">
      <h3 className="centered">Use Our Coupon To Shop For The Best Price</h3>

      <div className="couponbtn">
        <button onClick={couponGeneratorHandler}>Generate Coupon</button>
      </div>
      {coupon.length > 1 && <span>Your Coupon : {coupon}</span>}
    </div>
  );
};

export default Coupon;
