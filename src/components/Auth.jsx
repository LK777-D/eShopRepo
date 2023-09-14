import "./Auth.css";
import { useState } from "react";
import { UilEnvelope } from "@iconscout/react-unicons";
import { UilLock } from "@iconscout/react-unicons";
import ButtonPrimary from "../UI/ButtonPrimary";

/* eslint-disable react/prop-types */

const Auth = (props) => {
  const [login, setLogin] = useState(true);
  return (
    <div className="formcontainer">
      <div className="formheading">
        <h2 className="font4">Log In To Your Account</h2>
        <span className="font4">Get started with our app</span>
      </div>
      {login && (
        <div className="form">
          <div className="labelinput">
            <label htmlFor="email" className="font4">
              E-mail
            </label>
            <input
              placeholder="example@gmail.com"
              type="email"
              onChange={(e) => props.setLogInEmail(e.target.value)}
            />
            <UilEnvelope className="inputicon" />
          </div>
          <div className="labelinput">
            <label htmlFor="password" className="font4">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => props.setLogInPassword(e.target.value)}
            />
            <UilLock className="inputicon" />
          </div>
          <ButtonPrimary onClick={props.logIn}>Sign In</ButtonPrimary>
          <div>
            <span className="font4">
              Dont Have An Account ?{" "}
              <button
                onClick={() => setLogin(false)}
                className="signmethod font4"
              >
                Sign up
              </button>
            </span>
          </div>
        </div>
      )}

      {/* regisration */}
      {!login && (
        <div className="form">
          <div className="labelinput">
            <label htmlFor="email" className="font4">
              E-mail
            </label>
            <input
              placeholder="example@gmail.com"
              type="email"
              onChange={(e) => props.setRegisterEmail(e.target.value)}
            />
            <UilEnvelope className="inputicon" />
          </div>
          <div className="labelinput">
            <label htmlFor="password" className="font4">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              onChange={(e) => props.setRegisterPassword(e.target.value)}
            />
            <UilLock className="inputicon" />
          </div>
          <ButtonPrimary onClick={props.register}>Sign Up</ButtonPrimary>
          <div>
            <span className="font4">
              Already Have An Account ?{" "}
              <button
                onClick={() => setLogin(true)}
                className="signmethod font4"
              >
                Sign In
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
