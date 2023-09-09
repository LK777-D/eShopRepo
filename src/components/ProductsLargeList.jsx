import "./ProductsLargeList.css";

/* eslint-disable react/prop-types */

const ProductsLargeList = (props) => {
  return (
    <div>
      {props.data.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductsLargeList;
