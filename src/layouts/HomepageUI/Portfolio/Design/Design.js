import React from "react";
import {
  FaAdobe,
  FaFigma,
  FaCss3Alt,
  FaSlidersH,
  FaCode,
} from "react-icons/fa";
import "./style.css";

function Design() {
  const features = [
    { icon: <FaFigma />, title: "figma source" },
    { icon: <FaAdobe />, title: "adobe photoshop" },
    { icon: <FaCss3Alt />, title: "smooth CSS3 animations" },
    { icon: <FaSlidersH />, title: "highly adjustable website layouts" },
    { icon: <FaCode />, title: "hude shortcode collection" },
  ];
  return (
    <div className="design">
      <div className="design__wrapper">
        <div className="design__title">
          <h5>Features</h5>
          <h1>
            Core <br />
            features.
          </h1>
          <p>
            Best features with the <span>latest technologies </span>i use to
            design &amp; build modern websites.
          </p>
        </div>
        <div className="design__content">
          {features.map(({ icon, title }, idx) => (
            <div className="design__item">
              {icon}
              <h4>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Design;
