import formatMoney from "./formatMoney"

const sumMoney = (cart) => {
    const sum = cart.reduce((currentSum, currentNumber) => currentSum + currentNumber.price - currentNumber.discount, 0)
    return formatMoney(sum)
}

export default sumMoney