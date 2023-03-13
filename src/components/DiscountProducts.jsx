import { NavLink } from "react-router-dom";
import SinglePage from "../pages/SinglePage";
import formatDiscount from "../utils/formatDiscount";
import formatMoney from "../utils/formatMoney";

const DiscountProducts = ({ products }) => {
  return (
    <div className="popular-items-list grid">
      {products.map((product) => {
        if (product.discount != 0) {
          return (
            <NavLink
              to={`/catalog/${product.id}`}
              state={{ from: product }}
              key={product.id}
            >
              <div className="popular-items-item" key={product.id}>
                <div className="popular-items-list-item__img">
                  <img src={product.img} alt="img" />
                </div>
                <div className="popular-items-list__content">
                  <div className="popular-items-list__discount">
                    {formatMoney(product.price)}
                  </div>
                  <div className="popular-items-list__price">
                    {formatDiscount(product.price, product.discount)}
                  </div>
                </div>
              </div>
            </NavLink>
          );
        }
      })}
    </div>
  );
};
export default DiscountProducts;
