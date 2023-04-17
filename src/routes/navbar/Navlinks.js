import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlinksstyle.css";
import { useUserAuth } from "../../login/UserAuthContext";
import myimage from "../../assets/images/myimage.jpg";
import { useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
import CartMenu from "../../shop.componets/CartMenu/CartMenu";

const Navlinks = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useUserAuth();

  const { user, logOut } = useUserAuth();

  const data = useUserAuth();

  console.log(data);
  //logout
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  //signin
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/Shopee");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="/">Sreeramadasu Arun</a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="close-open-button close-btn">
            <i className="fa fa-times"></i>
          </label>

          <li>
            <NavLink to="/"> Portfolio </NavLink>
          </li>

          <li>
            <NavLink to="/shopee">Shopee</NavLink>
          </li>

          <li>
            <a href="#" className="desktop-item">
              Work +
            </a>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item">
              Work +
            </label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src={myimage} alt="" />
                </div>
                <div className="row">
                  <header>Arun Sreeramadasu</header>
                  <ul className="mega-links">
                    <li>
                      <NavLink to="/Shop">Shop Site</NavLink>
                    </li>
                    <li>
                      <NavLink to="*">lorem</NavLink>
                    </li>
                    <li>
                      <NavLink to="*">lorem</NavLink>
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
                      <NavLink to="*">lorem</NavLink>
                    </li>
                    <li>
                      <NavLink to="*">lorem</NavLink>
                    </li>
                    <li>
                      <NavLink to="*">lorem</NavLink>
                    </li>
                    <li>
                      <NavLink to="*">lorem</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>8008372144</header>
                  <ul className="mega-links">
                    <li>
                      <NavLink to="*">lorem</NavLink>
                    </li>

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
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="desktop-item">
              {user ? (
                <NavLink onClick={handleSignOut} to="/Logout">
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/Login">Login +</NavLink>
              )}
            </div>

            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Login +
            </label>
            <ul className="drop-menu">
              <li>
                <NavLink to="/Login">Sign In</NavLink>
              </li>
              <li>
                <NavLink to="/Login">Sign Up</NavLink>
              </li>
              <li>
                <NavLink onClick={handleGoogleSignIn}>
                  Login With Google
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <CartMenu />
          </li>
        </ul>
        <label htmlFor="menu-btn" className="close-open-button menu-btn">
          <i className="fa fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Navlinks;
