import Auth from "../components/Auth";
import "./Authentication.css";
/* eslint-disable react/prop-types */
const Authentication = (props) => {
  return (
    <section className="authent">
      <Auth
        logInEmail={props.logInEmail}
        setLogInEmail={props.setLogInEmail}
        logInPassword={props.logInPassword}
        setLogInPassword={props.setLogInPassword}
        registerEmail={props.registerEmail}
        setRegisterEmail={props.setRegisterEmail}
        registerPassword={props.registerPassword}
        setRegisterPassword={props.setRegisterPassword}
        register={props.register}
        logIn={props.logIn}
        logOut={props.logOut}
        user={props.user}
      />
    </section>
  );
};

export default Authentication;
