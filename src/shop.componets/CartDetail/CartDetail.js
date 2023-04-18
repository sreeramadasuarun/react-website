import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import CartItem from "../CartItem/CartItem";
import "./CartDetail.scss";
const CartDetail = () => {
  const { cartContext, cartTotalPrice } = useContext(AppContext);
  const [cart] = cartContext;
  const [totalPrice] = cartTotalPrice;
  const navigate = useNavigate();

  return (
    <div>
      <div className="area1">
        <span className="text-cart">Cart</span>
        <ul className="circles1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {totalPrice != 0 ? (
        <div className="cart-detail">
          <div className="cart-detail-item table-title">
            <div className="img-title">
              <div className="cart-detail-item-img">
                <p></p>
              </div>
              <div className="cart-detail-item-info">
                <h3>title</h3>
              </div>
            </div>
            <p className="cart-detail-price"> price</p>
            <div className="addRemove-detail">
              <span className="count">count</span>
            </div>
            <p className="cart-detail-price">total price</p>
          </div>
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <CartItem
                  flag={true}
                  title={item.title}
                  price={item.price}
                  img={item.img}
                  id={item.id}
                  count={item.count}
                />
              </div>
            );
          })}
          {totalPrice != 0 ? (
            <div className="total-price">
              <p>CART TOTAL</p>
              <hr className="hr" />
              <p>
                TOTAL <span className="price-span">{totalPrice}$</span>
              </p>
              <p className="checkout-btn">PROCEED TO CHECKOUT</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="empty">
          <span className="empty-cart-span">YOUR CART IS EMPTY</span>
          <br />
          <a
            className="empty-cart-btn"
            onClick={() => {
              navigate("/Shopee");
            }}
          >
            Go To Shopee
          </a>
        </div>
      )}
    </div>
  );
};

export default CartDetail;
