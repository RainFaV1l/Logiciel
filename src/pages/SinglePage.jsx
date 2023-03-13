import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import formatDiscount from "../utils/formatDiscount";

const SinglePage = () => {
  const location = useLocation();
  const { state } = location;
  const product = state.from;

  const [cart, setCart] = useOutletContext();

  const handlesCreateCart = ({
    id,
    name,
    img,
    description,
    price,
    discount,
  }) => {
    setCart((prev) => [
      ...prev,
      {
        id: id,
        name: name,
        img: img,
        description: description,
        price: price,
        discount: discount,
      },
    ]);
  };

  const idBasket = cart.find((item) => item.id == product.id);

  return (
    <div className="product" key={product.id}>
      <div className="product__container container">
        <div className="product__row">
          <div className="product__img">
            <img src={product.img} alt="image" />
          </div>
          <div className="product__content">
            <div className="product__title-subtitle">
              <h3 className="product__title">{product.name}</h3>
              <p className="product__subtitle">{product.description}</p>
            </div>
            <div className="product__price">
              {formatDiscount(product.price, product.discount)}
            </div>
            <div className="product__buttons">
              {idBasket ? (
                <p>Товар в корзине</p>
              ) : (
                <button
                  onClick={() => handlesCreateCart(product)}
                  className="product__button button"
                >
                  В корзину
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
