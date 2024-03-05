// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// function mergeArrays(arr1, arr2) {
//   return [...arr1, ...arr2];
// }
// console.log(mergeArrays(arr1, arr2));

// const arr3 = [1, 2, 3, 2, 4, 1, 5];
// const mergeArrays = [...arr3];

// console.log(mergeArrays);

// const arr4 = mergeArrays.filter((item, index) => {
//   return mergeArrays.indexOf(item) === index;
// });
// console.log(arr4);

// ________________________________________________________

// const arr = [1, 2, 3, 2, 4, 1, 5];

// // 1. Функция getEvenNumbers
// function getEvenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }
// console.log(getEvenNumbers(arr));

// // 2. Функция calculateAverage
// function calculateAverage(arr) {
//     // reduce - применяем функцию к каждому элементу слева на право
//     // 0 - начальное значение аккумулятора
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum / arr.length;
// }

// // 3. Функция capitalizeFirstLetter
// function capitalizeFirstLetter(str) {
//     // split - разбиваем строку
//     // map - применяем к каждому элементу фукнцпию, которую передаем
//     // join объединяем в одну строку
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(getEvenNumbers(numbers)); // Выведет: [2, 4, 6]
// console.log(calculateAverage(numbers)); // Выведет: 3.5
// console.log(capitalizeFirstLetter('hello qwerty')); // Выведет: Hello Qwerty

// ________________________________________________________

// function createCalculator(initialValue) {
//     let value = initialValue;

//     return {
//         add: function(num) {
//             value += num;
//             console.log(value);
//         },
//         subtract: function(num) {
//             value -= num;
//             console.log(value);
//         },
//         getValue: function() {
//             return value;
//         }
//     };
// }

// let calculator = createCalculator(10);

// document.getElementById('add').addEventListener('click', function() {
//     calculator.add(5);
// });

// document.getElementById('subtract').addEventListener('click', function() {
//     calculator.subtract(3);
// });

// _________________________________________________________

// function createPasswordChecker(length) {
//     return function(password) {
//         return password.length <= length;
//     };
// }

// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

// Семинар 2______________________________________________

// const person = {
//   name: "John",
//   age: 25,
//   gender: "male",

//   introduce() {
//     console.log(
//       `My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`
//     );
//   },

//   changeName(newName) {
//     this.name = newName;
//     console.log(this.name);
//   },
// };

// person.introduce();
// person.changeName("Mike");

// ________________________________________________________________

// const Animal = {
//     dogName: "Bobik",
//     eat() {
//     console.log(`${this.dogName} ест`);
//     }
//     }

//     Animal.eat();

//     const Dog = {
//     dogName: "Sharik",
//     bark() {
//     console.log(`${this.dogName} лает`);
//     },

//     }

//     Dog.eat = Animal.eat;
//     Dog.eat();

// ________________________________________________________________

// const calculator = {
//     add: function(a, b) {
//     return a + b;
//     },
//     subtract: function(a, b) {
//     return a - b;
//     },
//     multiply: function(a, b) {
//     return a * b;
//     }
//     };

//     console.log(calculator.add.call(null, 5, 3));
//     console.log(calculator.subtract.apply(null, [5, 3]));

// ________________________________________________________________

// class Persons {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce = () => {
//     console.log(`My name is ${this.name}. Mнe ${this.age}`);
//   };
// }

// const person = new Persons("John", 25);
// console.log(person);
// person.introduce();
