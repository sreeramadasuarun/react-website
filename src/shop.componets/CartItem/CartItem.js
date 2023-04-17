import React, { useContext } from "react";
import "./CartItem.scss";
import { VscAdd, VscChromeMinimize, VscChromeClose } from "react-icons/vsc";
import { AppContext } from "../AppContext";
import { Link, useNavigate } from "react-router-dom";

const CartItem = (props) => {
  const { cartContext, cartTotalPrice } = useContext(AppContext);
  const [cart, setCart] = cartContext;
  const [totalPrice, setTotalPrice] = cartTotalPrice;

  const navigate = useNavigate();

  const handleDelete = (comingId) => {
    const filterData = cart.filter((eachItem) => {
      return eachItem.id !== comingId;
    });
    setCart(filterData);
    setTotalPrice(0);
  };

  const addItem = () => {
    const productIndex = cart.findIndex((item) => item.id == props.id);
    if (productIndex < 0) {
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count++;
      setCart(tempCart);
    }
  };
  const removeItem = () => {
    const productIndex = cart.findIndex((item) => item.id == props.id);
    if (productIndex < 0) {
    } else {
      let tempCart = [...cart];
      tempCart[productIndex].count--;
      if (tempCart[productIndex].count > 0) {
        setCart(tempCart);
      } else {
        tempCart.splice(productIndex, 1);
        setCart(tempCart);
        setTotalPrice(0);
      }
    }
  };

  const goToDetailPage = () => {
    navigate(`/detail/${props.id}`);
  };
  return (
    <div>
      {!props.flag ? (
        <div className="cart-item">
          <div className="cart-item-img">
            <img alt="notfound" src={props.img} onClick={goToDetailPage} />
          </div>
          <div className="cart-item-info">
            <h3 onClick={goToDetailPage}>{props.title}</h3>
            <p>{props.price}$</p>
            <div className="addRemove">
              <span onClick={removeItem} className="addRemove-btn">
                <VscChromeMinimize />
              </span>
              <span className="count">{props.count}</span>
              <span onClick={addItem} className="addRemove-btn">
                <VscAdd />
              </span>
              <div
                className="delete-cart"
                onClick={() => handleDelete(props.id)}
              >
                Delete <VscChromeClose />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-detail-item">
          <div className="img-title">
            <div className="cart-detail-item-img">
              <Link to={`/detail/${props.id}`}>
                <img alt="notfound" src={props.img} />
              </Link>
            </div>
            <div className="cart-detail-item-info">
              <Link to={`/detail/${props.id}`}>
                <h3>{props.title}</h3>
              </Link>
            </div>
          </div>
          <p className="cart-detail-price">{props.price}$</p>
          <div className="addRemove-detail">
            <span onClick={removeItem} className="addRemove-btn">
              <VscChromeMinimize />
            </span>
            <span className="count">{props.count}</span>
            <span onClick={addItem} className="addRemove-btn">
              <VscAdd />
            </span>
            <div className="delete-cart" onClick={() => handleDelete(props.id)}>
              Delete <VscChromeClose />
            </div>
          </div>
          <p className="cart-detail-price">{props.count * props.price}$</p>
        </div>
      )}
    </div>
  );
};

export default CartItem;
