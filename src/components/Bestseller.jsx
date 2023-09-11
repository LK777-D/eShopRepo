import "./Bestsellers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
/* eslint-disable react/prop-types */

import Slider from "react-slick";

const Bestseller = (props) => {
  const DiscountedProds = props.prods.filter(
    (product) => product.discountPercentage > 10
  );
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h2>Top Bestsellers Of The 2023</h2>
      <div className="bestsellerwrapper">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </>
  );
};

export default Bestseller;
