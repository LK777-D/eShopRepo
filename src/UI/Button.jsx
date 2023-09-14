import "./Button.css";
const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick} className="btnsecondary font8">
        {props.children}
      </button>
    </>
  );
};

export default Button;
