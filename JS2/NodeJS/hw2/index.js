const { solveQuadraticEquation } = require('./quadraticEquation');

const coefficients = { a: 1, b: -3, c: 2 };
const roots = solveQuadraticEquation(coefficients.a, coefficients.b, coefficients.c);
console.log('Roots:', roots);