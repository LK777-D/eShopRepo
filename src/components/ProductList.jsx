/* eslint-disable react/prop-types */
import "./ProductList.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllProducts from "./AllProducts";
import Bestseller from "./Bestseller";
import OrderHelper from "./OrderHelper";
import Cart from "../components/Cart/Cart";

const ProductList = (props) => {
  const [prods, setProducts] = useState([]);
  const [bestseller, setBestseller] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const { setSearchData } = props;
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://dummyjson.com/products";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const productsData = await response.json();

        if (productsData.products) {
          setProducts(productsData.products);
        }
        if (productsData.products) {
          setBestseller(productsData.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setSearchData(prods);
  }, [setSearchData, prods]);

  const addToCartHandler = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.id === existingProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const productWithQuantity = { ...product, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, productWithQuantity]);
    }
    props.setScale(true);
    setTimeout(() => {
      props.setScale(false);
    }, 100);
    setTotal((prevTotal) => prevTotal + product.price);
    props.setAmount((prevAmount) => prevAmount + 1);
  };
  const removeFromCartHandler = (product) => {
    const filteredCart = cartItems.filter((prod) => prod.id !== product.id);
    setCartItems(filteredCart);
    setTotal((prevTotal) => prevTotal - product.price * product.quantity);
    console.log("hello");
    props.setAmount((prevAmount) => prevAmount - 1 * product.quantity);
  };
  const navigate = useNavigate();
  const orderHandler = () => {
    if (props.user) {
      setCartItems([]);
      props.setAmount(0);
      setTotal(0);
      props.setCartIsOpen(false);
    } else {
      navigate("/authentication");
      props.setCartIsOpen(false);
    }
  };
  return (
    <>
      <Bestseller prods={bestseller} onAdd={addToCartHandler} />
      <div className="seperator"></div>
      <OrderHelper />
      <Cart
        prods={cartItems}
        total={total}
        onRemove={removeFromCartHandler}
        cartIsOpen={props.cartIsOpen}
        onOpen={props.onOpen}
        amount={props.amount}
        orderHandler={orderHandler}
      />
      <div className="seperator"></div>
      <AllProducts prods={prods} onAdd={addToCartHandler} />
    </>
  );
};

export default ProductList;
