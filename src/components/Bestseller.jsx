import "./Bestsellers.css";
import { useState, useRef } from "react";
import ProductCard from "./ProductCard";
/* eslint-disable react/prop-types */

const Bestseller = (props) => {
  const scrollContainerRef = useRef(null);

  const [scrolling, setScrolling] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  const DiscountedProds = props.prods.filter(
    (product) => product.discountPercentage > 12
  );

  const handleMouseDown = (e) => {
    setScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!scrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setScrolling(false);
  };

  return (
    <>
      <div className="bestsellerwrapper">
        <h2 className="font4 discountheading">
          Hot Sales ! <span className="percent">Up To 12%</span>
        </h2>
        <div className="productsdivide"></div>
        <div
          className="bestseller"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {DiscountedProds.map((item) => (
            <ProductCard
              key={item.id}
              to={`/productdetail/${item.id}`}
              product={item}
              onAdd={props.onAdd}
              image={item.images[0]}
              title={item.title}
              description={item.description}
              price={item.price}
              // rating={product.rating}
              category={item.category}
              discountPercentage={item.discountPercentage}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bestseller;
