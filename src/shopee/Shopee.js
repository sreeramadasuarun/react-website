import React from "react";

import Products from "../shop.componets/Products/Products";
import "./Shopee.scss";

const Shophome = () => {
  return (
    <div className="home">
      <div className="shopee-background"> </div>
      <h3 className="home-h3">products shop</h3>
      <Products limit={8} />
    </div>
  );
};

export default Shophome;
