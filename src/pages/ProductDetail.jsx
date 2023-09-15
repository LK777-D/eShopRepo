/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import ProductDetailCard from "../components/ProductDetailCard";

const ProductDetail = (props) => {
  const { productId } = useParams();

  console.log("props.products:", props.products);
  console.log("productId (type):", productId, typeof productId);

  const productDetailOpen = (id) => {
    return props.products.find(
      (product) => String(product.id).trim() === String(id).trim()
    );
  };

  // console.log(props.products);
  const detailedProduct = productDetailOpen(productId);

  if (!detailedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ProductDetailCard
        title={detailedProduct.title}
        price={detailedProduct.price}
        images={detailedProduct.images[0]}
        brand={detailedProduct.brand}
        discountPercentage={detailedProduct.discountPercentage}
        description={detailedProduct.description}
      />
    </>
  );
};

export default ProductDetail;
