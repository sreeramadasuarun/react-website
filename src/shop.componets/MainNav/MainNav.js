import React, { useContext, useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
import { FaBars } from "react-icons/fa";
import "./MainNav.scss";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <span className="logo">LOGO</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>

        <CartMenu />
      </ul>
    </div>
  );
};

export default MainNav;
