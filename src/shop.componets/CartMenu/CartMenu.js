import React, { useContext } from "react";
import "../CartMenu/CartMenu.scss";
import { FiShoppingCart } from "react-icons/fi";
import { AppContext } from "../AppContext";

const CartMenu = () => {
  const { showCart, cartContext } = useContext(AppContext);
  const [cartState, setCartState] = showCart;
  const [cart, setCart] = cartContext;

  const openCart = () => {
    setCartState(true);
  };

  let total = 0;
  cart.map((item) => {
    total += item.count;
  });

  return (
    <div>
      <ul className="cart-menu">
        <li className="cart-icon">
          <FiShoppingCart onClick={openCart} />
          <span className="badge">{total}</span>
        </li>
      </ul>
    </div>
  );
};

export default CartMenu;
