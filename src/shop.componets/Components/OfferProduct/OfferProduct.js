import React from "react";
import "./OfferProduct.scss";

const OfferProduct = () => {
  return (
    <div className="offer">
      <div className="offer-content">
        <div className="video">
          <img
            alt="notfound"
            src="https://cdn.shopify.com/s/files/1/0304/5739/7386/files/bannerv5.jpg?v=1613680262"
          />
        </div>
        <div className="txt">
          <div className="txt-content">
            <h3 className="offer-h3">Super Sale Enjoy 20% Off</h3>
            <h2>Bud Vase Set</h2>
            <p>
              A calm and captivating range of blue, green, and grey. This set
              includes three bud vases featuring our Winter Seasonal palette:
              Stillwater, Penny Green, and Zinc. Like all of our seasonal
              collections, these items are available for a limited time.
            </p>
            <p className="shop-btn">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferProduct;
