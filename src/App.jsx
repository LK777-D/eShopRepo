/* eslint-disable react/prop-types */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase-conf";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import SecondaryNav from "./components/SecondaryNav";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Authentication from "./pages/Authentication";

function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [scaleAfterClick, setScaleAfterClick] = useState(false);

  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const openCartHandler = () => {
    setCartIsOpen(!cartIsOpen);
    // if (!cartIsOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "visible";
    // }
  };

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPassword
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  };
  const logOut = async () => {
    await signOut(auth);
    navigate("/authentication");
  };

  return (
    <>
      <Navbar
        onOpen={openCartHandler}
        amount={amount}
        scale={scaleAfterClick}
        searchData={searchData}
        user={user}
        logOut={logOut}
      />
      {/* <SecondaryNav searchData={searchData} /> */}

      {/* <section className="discount">
        <p>
          Get <span>50% Discount</span> on Your First Order
        </p>
      </section> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSearchData={setSearchData}
              setAmount={setAmount}
              cartIsOpen={cartIsOpen}
              openCartHandler={openCartHandler}
              setScale={setScaleAfterClick}
            />
          }
        />
        <Route
          path="/productdetail/:productId"
          element={<ProductDetail products={searchData} />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/authentication"
          element={
            <Authentication
              logInEmail={logInEmail}
              setLogInEmail={setLogInEmail}
              logInPassword={logInPassword}
              setLogInPassword={setLogInPassword}
              registerEmail={registerEmail}
              setRegisterEmail={setRegisterEmail}
              registerPassword={registerPassword}
              setRegisterPassword={setRegisterPassword}
              register={register}
              logIn={logIn}
              logOut={logOut}
              user={user}
            />
          }
        />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
