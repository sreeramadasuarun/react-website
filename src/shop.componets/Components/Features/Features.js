import React from "react";
import "./Features.scss";
import { VscSync, VscPackage, VscPaintcan } from "react-icons/vsc";

const Features = () => {
  return (
    <div className="features">
      <div className="feature right-border">
        <VscPackage className="feature-icon" />
        <div className="content">
          <span>365 DAYS RETURN</span>
          <p>From 200+ locations nationwide</p>
        </div>
      </div>
      <div className="feature right-border">
        <VscSync className="feature-icon" />
        <div className="content">
          <span>INTERNATIONAL SHIPPING</span>
          <p>From only £3.95</p>
        </div>
      </div>
      <div className="feature">
        <VscPaintcan className="feature-icon" />
        <div className="content">
          <span>14-Days Money Back</span>
          <p>14-Days Money Back</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
