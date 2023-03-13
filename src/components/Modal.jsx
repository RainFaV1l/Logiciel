import { useState } from "react";
import formatDiscount from "../utils/formatDiscount";
import sumMoney from "../utils/sumMoney";

const Modal = ({ modal, cart, setCart, close }) => {
  // const [cartPrice, setCartPrice] = useState(0);
  const handleDeleteCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="modal__container">
        <div className="modal-title-close">
          <h1 className="modal__header">Корзина</h1>
          <div className="modal__close" onClick={close}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4999 19.5417L10.3541 26.6875C10.0867 26.9549 9.74645 27.0885 9.33325 27.0885C8.92006 27.0885 8.57978 26.9549 8.31242 26.6875C8.04506 26.4201 7.91138 26.0799 7.91138 25.6667C7.91138 25.2535 8.04506 24.9132 8.31242 24.6458L15.4583 17.5L8.31242 10.3542C8.04506 10.0868 7.91138 9.74652 7.91138 9.33333C7.91138 8.92013 8.04506 8.57986 8.31242 8.31249C8.57978 8.04513 8.92006 7.91145 9.33325 7.91145C9.74645 7.91145 10.0867 8.04513 10.3541 8.31249L17.4999 15.4583L24.6458 8.31249C24.9131 8.04513 25.2534 7.91145 25.6666 7.91145C26.0798 7.91145 26.4201 8.04513 26.6874 8.31249C26.9548 8.57986 27.0885 8.92013 27.0885 9.33333C27.0885 9.74652 26.9548 10.0868 26.6874 10.3542L19.5416 17.5L26.6874 24.6458C26.9548 24.9132 27.0885 25.2535 27.0885 25.6667C27.0885 26.0799 26.9548 26.4201 26.6874 26.6875C26.4201 26.9549 26.0798 27.0885 25.6666 27.0885C25.2534 27.0885 24.9131 26.9549 24.6458 26.6875L17.4999 19.5417Z"
                fill="#18181A"
              />
            </svg>
          </div>
        </div>
        <div className="modal__lists">
          {cart.map((item) => {
            return (
              <div className="modal__item modal-item" key={item.id}>
                <div className="modal-image-content">
                  <div className="modal__img">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="modal__content">
                    <h3 className="modal-item__title">{item.name}</h3>
                    <p className="modal-item__price">
                      {formatDiscount(item.price, item.discount)}
                    </p>
                  </div>
                </div>
                <div
                  className="modal-item__del"
                  onClick={() => handleDeleteCartItem(item.id)}
                >
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4999 19.5417L10.3541 26.6875C10.0867 26.9549 9.74645 27.0885 9.33325 27.0885C8.92006 27.0885 8.57978 26.9549 8.31242 26.6875C8.04506 26.4201 7.91138 26.0799 7.91138 25.6667C7.91138 25.2535 8.04506 24.9132 8.31242 24.6458L15.4583 17.5L8.31242 10.3542C8.04506 10.0868 7.91138 9.74652 7.91138 9.33333C7.91138 8.92013 8.04506 8.57986 8.31242 8.31249C8.57978 8.04513 8.92006 7.91145 9.33325 7.91145C9.74645 7.91145 10.0867 8.04513 10.3541 8.31249L17.4999 15.4583L24.6458 8.31249C24.9131 8.04513 25.2534 7.91145 25.6666 7.91145C26.0798 7.91145 26.4201 8.04513 26.6874 8.31249C26.9548 8.57986 27.0885 8.92013 27.0885 9.33333C27.0885 9.74652 26.9548 10.0868 26.6874 10.3542L19.5416 17.5L26.6874 24.6458C26.9548 24.9132 27.0885 25.2535 27.0885 25.6667C27.0885 26.0799 26.9548 26.4201 26.6874 26.6875C26.4201 26.9549 26.0798 27.0885 25.6666 27.0885C25.2534 27.0885 24.9131 26.9549 24.6458 26.6875L17.4999 19.5417Z"
                      fill="#18181A"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        <div className="modal__content">
          <div className="modal__price">Итого: {sumMoney(cart)}</div>
          <div className="modal__button button">Купить сайчас</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
