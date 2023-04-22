import React, { useContext } from "react";
import "./Product.scss";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ id, firstImg, title, price, category }) => {
  const { cartContext } = useContext(AppContext);
  const [cart, setCart] = cartContext;

  const addToCart = () => {
    const productIndex = cart.findIndex((item) => item.id == id);
    if (productIndex < 0) {
      setCart([
        ...cart,
        {
          id: id,
          img: firstImg,
          title: title,
          price: price,
          categories: category,
          count: 1,
        },
      ]);
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count++;
      setCart(tempCart);
    }
    // document.getElementById("addedButton").textContent = "added to cart";
    toast("Added to Cart");
    console.log(cart);
  };
  console.log(cart);
  console.log(cartContext);
  return (
    <div className="pro">
      <Link to={`/detail/${id}`}>
        <div className="img-box">
          <img alt="notfound" src={firstImg} />
        </div>
        <div className="text-left">
          <h4 className="product-title">
            {title.split(" ").slice(0, 3).join(" ")}
          </h4>
          <span className="product-price">{price + "$"}</span>
        </div>
      </Link>
      <p className="btn-list" id="addedButton" onClick={addToCart}>
        Add to Cart
      </p>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Product;
