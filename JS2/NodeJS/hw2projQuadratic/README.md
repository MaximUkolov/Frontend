# Как использовать библиотеку для решения квадратных уравнений

## Установка

### Установите библиотеку, используя npm:

`npm install quadratic-equation-solver`

## Использование

### Импортируйте библиотеку в свой проект:


`const { solveQuadraticEquation } = require('quadratic-equation-solver');`

### Вызовите функцию solveQuadraticEquation(a, b, c) с коэффициентами квадратного уравнения:

`const coefficients = { a: 1, b: -3, c: 2 };
const roots = solveQuadraticEquation(coefficients.a, coefficients.b, coefficients.c);
console.log('Roots:', roots);`

## Пример

Пусть у нас есть уравнение x^2 - 3x + 2 = 0. Мы можем передать коэффициенты a = 1, b = -3, c = 2 в функцию solveQuadraticEquation для нахождения корней уравнения.

## Возвращаемое значение

Функция solveQuadraticEquation(a, b, c) возвращает массив корней уравнения. Если у уравнения два корня, они будут возвращены в виде [x1, x2]. Если уравнения один корень, он будет возвращен в виде [x]. Если уравнения нет корней, будет возвращен пустой массив [].
Таким образом, вы можете легко использовать эту библиотеку для решения квадратных уравнений в своем проекте.