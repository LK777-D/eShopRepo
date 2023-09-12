/* eslint-disable react/prop-types */
import "./AllProducts.css";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ButtonPrimary from "../UI/ButtonPrimary";

const initialShownItems = 16;
const nextLoad = 4;

const AllProducts = (props) => {
  const [shownItems, setShownItems] = useState(initialShownItems);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const showMoreHandler = () => {
    setShownItems((prevItems) => prevItems + nextLoad);
  };
  const showLessHandler = () => {
    setShownItems(initialShownItems);
  };
  const allItems = props.prods.slice(4, shownItems);
  const allItemsButton = props.prods;
  const smartphones = props.prods.filter(
    (product) => product.category === "smartphones"
  );
  const laptops = props.prods.filter(
    (product) => product.category === "laptops"
  );
  const electronics = [...smartphones, ...laptops];
  const skincare = props.prods.filter(
    (product) => product.category === "skincare"
  );
  const parfume = props.prods.filter(
    (product) => product.category === "fragrances"
  );
  const decoration = props.prods.filter(
    (product) => product.category === "home-decoration"
  );

  const filterBycategory = (category) => {
    setFilteredProducts(category);
    setIsFiltered(true);
  };

  return (
    <section className="section">
      <h2 className="prodsheading font4">All Products</h2>
      <div className="productsdivide"></div>
      <div className="categories ">
        <ButtonPrimary onClick={() => filterBycategory(allItemsButton)}>
          All
        </ButtonPrimary>
        <ButtonPrimary onClick={() => filterBycategory(electronics)}>
          Electronics
        </ButtonPrimary>
        <ButtonPrimary onClick={() => filterBycategory(skincare)}>
          Skincare
        </ButtonPrimary>
        <ButtonPrimary onClick={() => filterBycategory(parfume)}>
          Parfume
        </ButtonPrimary>
        <ButtonPrimary onClick={() => filterBycategory(decoration)}>
          Decoration
        </ButtonPrimary>
      </div>

      <div className="productscont" id="prodsall">
        {!isFiltered &&
          allItems.map((product) => (
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
        {isFiltered &&
          filteredProducts.map((product) => (
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
      {!isFiltered && (
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
      )}
    </section>
  );
};

export default AllProducts;
