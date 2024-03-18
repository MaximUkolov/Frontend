require('colors')

const { calculateResultSum } = require("./calculateResultSum");
const total = calculateResultSum([12.1, 2.2, 3.1], 0.9);
const resultText = `Result: ${total} Rub`
console.log(total > 50 ? resultText.red : resultText.green)

