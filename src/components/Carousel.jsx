import "./Carousel.css";
// import img1 from "../assets/PB_birm_1800x900.jpg";
// import img2 from "../assets/eef8b9cb9f39943ff56979fae3a16b10.jpg";
// import img3 from "../assets/p8992561_b_h9_aa.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = (props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleNext = () => {
    if (imgIndex < props.images.length - 1) {
      setImgIndex((prevIndex) => prevIndex + 1);
    }
    if (imgIndex === props.images - 1) {
      setImgIndex(0);
    }
  };
  const handlePrev = () => {
    if (imgIndex !== 0) {
      setImgIndex((prevIndex) => prevIndex - 1);
    } else {
      setImgIndex(2);
    }
  };

  return (
    <div className="carousel">
      {/* <button onClick={handlePrev} className="prev btns">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button> */}

      <img src={props.images[imgIndex]} alt="series" className="imgs" />
      {/* <button onClick={handleNext} className="next btns">
        <FontAwesomeIcon icon={faChevronRight} />
      </button> */}
    </div>
  );
};

export default Carousel;
