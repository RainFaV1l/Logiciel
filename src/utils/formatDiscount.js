import formatMoney from "./formatMoney";

const formatDiscount = (price, discount) => {
    return formatMoney(price - discount);
}

export default formatDiscount;