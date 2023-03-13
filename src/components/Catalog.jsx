import { useState } from "react";
import { NavLink } from "react-router-dom";
import formatDiscount from "../utils/formatDiscount";
import formatMoney from "../utils/formatMoney";

const Catalog = ({ products }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchData = products.filter((item) => {
    return item.name.toLowerCase().includes(search);
  });

  const isSearchDataNull = (searchData) => {
    if (searchData != 0) {
      return searchData.map((product) => {
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
                <div className="popular-items-list__price">
                  <div className="popular-items-list__discount">
                    {formatMoney(product.price)}
                  </div>
                  <div className="popular-items-list__price">
                    {formatDiscount(product.price, product.discount)}
                  </div>
                  <div className="popular-items-list__price">
                    {product.name}
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        );
      });
    } else {
      return <div>Товары не найдены</div>;
    }
  };
  return (
    <div>
      <div className="catalog__header">
        <div className="popular-items__header">
          <h2 className="popular-items__title">Каталог</h2>
          <p className="popular-items__subtitle">
            Безопасность твоего компьютера начинается с лицензионного Windows
          </p>
        </div>
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Поиск"
        />
      </div>
      <div className="popular-items-list grid">
        {isSearchDataNull(searchData)}
      </div>
    </div>
  );
};
export default Catalog;
