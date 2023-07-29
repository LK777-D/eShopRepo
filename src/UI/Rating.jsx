import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const fullStars = Math.floor(props.rating);

  return (
    <div className="rating">
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
      <FontAwesomeIcon icon={faStar} color="gold" />
    </div>
  );
};

export default Rating;
