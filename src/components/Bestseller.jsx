import "./Bestsellers.css";

const Bestseller = (props) => {
  const bestsellerItems = props.prods.slice(8, 12);

  return (
    <div className="bestsellerwrapper">
      <h2>Top Bestsellers Of The 2023</h2>
      <div className="bestseller">
        {bestsellerItems.map((item) => (
          <div key={item.id} className="bestselleritem">
            <div>
              <img src={item.images[1]} alt="product" />
              <span className="hoverprice">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
