/* eslint-disable react/prop-types */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SecondaryNav from "./components/SecondaryNav";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [scaleAfterClick, setScaleAfterClick] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(!cartIsOpen);
    // if (!cartIsOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "visible";
    // }
  };
  return (
    <>
      <Navbar
        onOpen={openCartHandler}
        amount={amount}
        scale={scaleAfterClick}
      />
      {/* <SecondaryNav searchData={searchData} /> */}

      {/* <section className="discount">
        <p>
          Get <span>50% Discount</span> on Your First Order
        </p>
      </section> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearchData={setSearchData}
              setAmount={setAmount}
              cartIsOpen={cartIsOpen}
              openCartHandler={openCartHandler}
              setScale={setScaleAfterClick}
            />
          }
        />
        <Route
          path="/productdetail/:productId"
          element={<ProductDetail products={searchData} />}
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
