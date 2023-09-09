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
    <section className="section">
      <h2 className="prodsheading font4">All Products</h2>
      <div className="productsdivide"></div>
      <div className="productscont" id="prodsall">
        {newItems.map((product) => (
          <div key={product.id}>
            <ProductCard
              to={`/productdetail/${product.id}`}
              product={product}
              onAdd={props.onAdd}
              key={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              price={product.price}
              // rating={product.rating}
              category={product.category}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
      <div className="showmore ">
        {shownItems < props.prods.length ? (
          <div className="moreless font1">
            <button onClick={showMoreHandler}>Show More Products...</button>
          </div>
        ) : (
          <div className="moreless">
            <button onClick={showLessHandler}>Show less Products...</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;
