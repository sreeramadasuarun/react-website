import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [leftmenu, setLeftmenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showCart: [showCart, setShowCart],
        cartContext: [cart, setCart],
        cartTotalPrice: [totalPrice, setTotalPrice],
        productsContext: [products, setProducts],
        leftmenuState: [leftmenu, setLeftmenu],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
