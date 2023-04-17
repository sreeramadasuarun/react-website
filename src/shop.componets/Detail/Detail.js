import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { useLocation, useParams } from "react-router-dom";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import "./Detail.scss";

const Detail = () => {
  const { cartContext } = useContext(AppContext);
  const [cart, setCart] = cartContext;

  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [counter, setCounter] = useState(1);

  const location = useLocation();
  if (location.pathname.includes("/detail")) {
  }

  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const addToCart = () => {
    if (counter > 0) {
      const productIndex = cart.findIndex((item) => item.id == id);
      if (productIndex < 0) {
        setCart([
          ...cart,
          {
            id: id,
            img: product.image,
            title: product.title,
            price: product.price,
            count: counter,
          },
        ]);
      } else {
        let tempCart = [...cart];
        tempCart[productIndex].count += counter;
        setCart(tempCart);
      }
    }
  };

  // const { title, price, description, category } = product;

  return (
    <div className="detail">
      <div className="bread-crumb">
        <span>backHome</span>
      </div>
      <div className="product-container">
        <div className="product-img">
          <img alt="notfound" className="productimage" src={product.image} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <h3>${product.price} USD</h3>
          <hr className="hr" />
          <p>{product.description}</p>
          <div className="add-to-cart">
            <div onClick={addToCart} className="add-button">
              <span>ADD TO CART</span>
            </div>
            <div className="counter">
              {counter}
              <div className="add-remove">
                <VscTriangleUp
                  className="add-btn"
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                />
                <VscTriangleDown
                  className="remove-btn"
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="categories">
            <p className="cat-title">
              Categories :{" "}
              <span className="cat-product">{product.category}</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      {/* <div className="latest-products">
        <h2 className="latest-products-title">LATEST PRODUCTS</h2>
        <Products limit={4} />
      </div> */}
    </div>
  );
};

export default Detail;
