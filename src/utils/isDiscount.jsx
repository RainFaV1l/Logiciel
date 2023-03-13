import formatMoney from "./formatMoney";

const isDiscount = (discount) => {
  if (discount != 0) {
    return (
      <div className="popular-items-list__discount">
        {formatMoney(discount)}
      </div>
    );
  }
};

export default isDiscount;
