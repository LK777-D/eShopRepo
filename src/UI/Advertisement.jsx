import "./Advertisement.css";
import { Link } from "react-router-dom";
import electronics from "../assets/electronics2.jpg";
import parfume from "../assets/perfume.webp";
import skincare from "../assets/skincaresingle.jpg";

import decoration from "../assets/decoration.webp";

const Advertisement = () => {
  return (
    <div className="ad ">
      <div className="electronics">
        <img src={electronics} />
        <span className="font4">Electronics</span>
        <div className="overlay font4">
          <Link className="font4">View More</Link>
        </div>
      </div>
      <div className="decoration">
        <img src={skincare} />
        <span className="font4">Skincare</span>
        <div className="overlay font4">
          <Link>View More</Link>
        </div>
      </div>
      <div className="mergedsections">
        <div className="parfume font4">
          <img src={parfume} />
          <span>Parfume</span>
          <div className="overlay font4">
            <Link>View More</Link>
          </div>
        </div>
        <div className="skincare font4">
          <img src={decoration} />
          <span>Decoration</span>
          <div className="overlay font4">
            <Link>View More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
