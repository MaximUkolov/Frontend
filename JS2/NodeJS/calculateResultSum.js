const np = require("number-precision");

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => np.plus(acc, purchase), 0);
  total = np.times(total, discount);
  return total;
}

module.exports = { calculateResultSum };
