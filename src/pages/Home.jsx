import "./Home.css";
/* eslint-disable react/prop-types */
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import CategoryShowCase from "../components/CategoryShowcase";
import Coupon from "../components/Coupon";
import Advertisement from "../UI/Advertisement";

const Home = (props) => {
  return (
    <>
      <header className="mainheader">
        <Header />
        <CategoryShowCase className="showcaseheader" />
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
        />
      </main>
    </>
  );
};

export default Home;
