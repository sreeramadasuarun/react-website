import React from "react";
import { NavLink } from "react-router-dom";
import "../Componets/Navlinksstyle.css";
import { useAuth } from "../login/auth";
// import { useNavigate } from "react-router-dom";
import myimage from "../assets/images/myimage.jpg";

const Navlinks = () => {
  // const navigate = useNavigate();

  const { user, logout } = useAuth();

  const data = useAuth();

  console.log(data);

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="/"> Sreeramadasu Arun</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label className="btn close-btn">
            <i className="fas fa-times"></i>
          </label>

          <li>
            <NavLink to="/"> Portfolio </NavLink>
          </li>

          <li>
            <a to="*" className="desktop-item">
              Work +
            </a>
            <input type="checkbox" id="showMega" />
            <label className="mobile-item">Work</label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src={myimage} alt="" />
                </div>
                <div className="row">
                  <header>Arun Sreeramadasu</header>
                  <ul className="mega-links">
                    <li>
                      <NavLink to="/users"> User </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Projects" className="active1">
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/About"> About </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Drinks"> Drinks </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>sreeramadasuarun@gmail.com</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>8008372144</header>
                  <ul className="mega-links">
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            {user ? (
              <NavLink onClick={logout} to="/Logout">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/Login">Login +</NavLink>
            )}
            <input type="checkbox" id="showDrop" />
            <label className="mobile-item">Dropdown Menu</label>
            <ul className="drop-menu">
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Login With Google</a>
              </li>
            </ul>
          </li>
        </ul>
        <label className="btn menu-btn">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Navlinks;
