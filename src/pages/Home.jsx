import "./Home.css";
/* eslint-disable react/prop-types */
import Header from "../components/Header";
import ProductList from "../components/ProductList";

import Coupon from "../components/Coupon";
import Advertisement from "../UI/Advertisement";

const Home = (props) => {
  return (
    <>
      <header className="mainheader">
        <Header />
      </header>
      <div className="seperator"></div>
      <section>
        <Coupon />
        <Advertisement />
      </section>
      <div className="seperator"></div>
      <main className="prods" id="main">
        <ProductList
          cartIsOpen={props.cartIsOpen}
          onOpen={props.openCartHandler}
          setAmount={props.setAmount}
          setSearchData={props.setSearchData}
          setScale={props.setScale}
          amount={props.amount}
          user={props.user}
          setCartIsOpen={props.setCartIsOpen}
        />
      </main>
    </>
  );
};

export default Home;
