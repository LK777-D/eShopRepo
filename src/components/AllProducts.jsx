/* eslint-disable react/prop-types */
import "./AllProducts.css";
import { useState } from "react";
import ProductCard from "./ProductCard";

const initialShownItems = 10;
const nextLoad = 4;

const AllProducts = (props) => {
  const [shownItems, setShownItems] = useState(initialShownItems);

  const showMoreHandler = () => {
    setShownItems((prevItems) => prevItems + nextLoad);
  };
  const showLessHandler = () => {
    setShownItems(initialShownItems);
  };

  const newItems = props.prods.slice(4, shownItems);
  // const renderedItems = () => {
  //   return props.prods.slice(4, shownItems);
  // };

  return (
    <>
      <h2 className="centered">All Products</h2>
      <div className="allproducts" id="prodsall">
        {newItems.map((product) => (
          <ProductCard
            product={product}
            onAdd={props.onAdd}
            key={product.id}
            image={product.images}
            title={product.title}
            description={product.description}
            price={product.price}
            // rating={product.rating}
            category={product.category}
            discountPercentage={product.discountPercentage}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="showmore">
        {shownItems < props.prods.length ? (
          <div className="moreless">
            <button onClick={showMoreHandler}>Show More Products...</button>
          </div>
        ) : (
          <div className="moreless">
            <button onClick={showLessHandler}>Show less Products...</button>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
