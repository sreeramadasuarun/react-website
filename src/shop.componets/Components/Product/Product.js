import React, { useContext } from "react";
import "./Product.scss";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

const Product = ({ id, firstImg, title, price }) => {
  const { cartContext } = useContext(AppContext);
  const [cart, setCart] = cartContext;

  const addToCart = () => {
    const productIndex = cart.findIndex((item) => item.id == id);
    if (productIndex < 0) {
      setCart([
        ...cart,
        { id: id, img: firstImg, title: title, price: price, count: 1 },
      ]);
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count++;
      setCart(tempCart);
    }
  };

  return (
    <div className="product">
      <div className="img-box">
        <img alt="notfound" src={firstImg} />
      </div>
      <Link to={`/detail/${id}`}>
        <h4 className="product-title">{title.slice(0, 20)}</h4>
      </Link>
      <span className="product-price">{price + "$"}</span>
      <p className="btn-list" onClick={addToCart}>
        add to cart
      </p>
    </div>
  );
};

export default Product;
