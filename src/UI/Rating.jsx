import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = () => {
  return (
    <div className="rating">
      <span>
        <FontAwesomeIcon icon={faStar} color="gold" />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} color="gold" />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} color="gold" />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} color="gold" />
      </span>
      <span>
        <FontAwesomeIcon icon={faStar} color="gold" />
      </span>
    </div>
  );
};

export default Rating;
