import ProductsByCategory from "../components/ProductsByCategory";

/* eslint-disable react/prop-types */

const Products = ({ searchData }) => {
  console.log(searchData);
  return (
    <>
      <ProductsByCategory searchData={searchData} />
    </>
  );
};
export default Products;
