import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button className="btnsecondary font4">{props.children}</button>
    </>
  );
};

export default Button;
