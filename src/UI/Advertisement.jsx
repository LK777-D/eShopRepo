import "./Advertisement.css";

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
      </div>
      <div className="decoration">
        <img src={skincare} />
        <span className="font4">Skincare</span>
      </div>
      <div className="mergedsections">
        <div className="parfume font4">
          <img src={parfume} />
          <span>Parfume</span>
        </div>
        <div className="skincare font4">
          <img src={decoration} />
          <span>Decoration</span>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
