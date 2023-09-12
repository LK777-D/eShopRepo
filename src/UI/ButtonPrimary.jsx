/* eslint-disable react/prop-types */
import "./ButtonPrimary.css";
const ButtonPrimary = (props) => {
  return (
    <button onClick={props.onClick} className="btnprimary">
      {props.children}
    </button>
  );
};

export default ButtonPrimary;
