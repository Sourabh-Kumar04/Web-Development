const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: 'js Course',
        price: 2999
    },
    {
        itemName: 'python Course',
        price: 999
    },
    {
        itemName: 'Mobile Development Course',
        price: 5999
    },
    {
        itemName: 'Data Science Course',
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0)
console.log(priceToPay);






