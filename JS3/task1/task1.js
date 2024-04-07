// 'use strict';
// /*
// Задание 1:
// Необходимо создать механизм для безопасного добавления метаданных к объектам
// книг с использованием ключей типа Symbol. Для чего необходимо:
// 1. Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// 2. Реализовать методы addMetadata и getMetadata и другие методы, которые будут
// необходимы для работы кода ниже.
// */

// // Объявляем символы reviewSymbol, ratingSymbol и tagsSymbol

// const reviewSymbol = Symbol("review");
// const ratingSymbol = Symbol("rating");
// const tagsSymbol = Symbol("tags");

// // Создадим класс Book

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     /**
//      * Метод извлекает из объекта значение под свойством metadataType
//      * и возвращает его.
//      * @param {Symbol} metadataType
//      * @returns {Array}
//      */
//     getMetadata(metadataType) {
//         if (!this[metadataType]) {
//             return [];
//         }
//         return this[metadataType];
//     }

//     /**
//      * Метод добавляет в объект массив под ключом metadataType, со значением
//      * data внутри. Если массив под данным свойством уже существует,
//      * тогда data просто будет добавлен в данный массив.
//      * @param {Symbol} metadataType
//      * @param {any} data
//      */
//     addMetadata(metadataType, data) {
//         if (!this[metadataType]) {
//             this[metadataType] = [];
//         }
//         this[metadataType].push(data);
//     }

//     getAverageRating() {
//         const arrRating = this.getMetadata(ratingSymbol);
//         if (!arrRating) {
//             return null;
//         }
//         let sum = 0;
//         for (let i = 0; i < arrRating.length; i++) {
//             sum += arrRating[i];
//         }
//         return Math.round((sum / arrRating.length) * 10) / 10;
//     }
//     hasTag(tag) {
//         const arrTags = this.getMetadata(tagsSymbol);
//         if (!arrTags) {
//             return false;
//         }
//         return arrTags.includes(tag);
//         // for (let i = 0; i < arrTags.length; i++) {
//         //     if (arrTags[i] === tag) {
//         //         return true;
//         //     }
//         // }
//         // return false;
//     }
//     reviewsCount() {
//         const arrReviews = this.getMetadata(reviewSymbol)
//         if (!arrReviews) {
//             return 0;
//         }
//         return arrReviews.length;
//     }
// }

// const book = new Book("1984", "George Orwell");
// book.addMetadata(reviewSymbol, "Отличная книга о дистопии!");
// book.addMetadata(reviewSymbol, "Книга отстой, не покупайте ее.");
// book.addMetadata(ratingSymbol, 5);
// book.addMetadata(ratingSymbol, 4);
// book.addMetadata(ratingSymbol, 4);

// // ["Отличная книга о дистопии!", "Книга отстой, не покупайте ее."]
// console.log(book.getMetadata(reviewSymbol));
// console.log(book.getMetadata(ratingSymbol)); // [5, 4, 4]
// console.log(book.getMetadata(tagsSymbol)); // []

// book.addMetadata(tagsSymbol, "novel");
// book.addMetadata(tagsSymbol, "dystopia");
// console.log(book.getMetadata(tagsSymbol)); // ["novel", "dystopia"]

// console.log(book.getAverageRating()); // 4.3
// console.log(book.hasTag("novel")); // true
// console.log(book.hasTag("blockbuster")); // false
// console.log(book.reviewsCount()); // 2




// /*
// Задание 2: 
// Создайте обычный объект library. Необходимо реализовать Symbol.iterator, у 
// которого каждая итерация будет возвращать следующую книгу из библиотеки.
// Продемонстрируйте работу Symbol.iterator у нашего объекта.
// */
// // Список книг:
 
// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];
 
// // const library = {
// //   books,
// //   *[Symbol.iterator]() {
// //     for (const book of this.books) {
// //       yield book;
// //     }
// //   },
// // };
 
 
// const library = {
//   books,
//   [Symbol.iterator]() {
//     let index = 0;
//     return {
//       next:() => {
//         if (index < this.books.length) {
//           return {
//             value: this.books[index++],
//             done: false,
//           };
//         }
//         return {
//           value: undefined,
//           done: true,
//         };
//       },
//     };
//   },
// };
 
 
// const iterator = library[Symbol.iterator]();
// console.log(iterator);
 
// for (const book of library) {
//   console.log(book);
// }
 
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());
// // console.log(iterator.next());


// /*
// Часто при работе с DOM мы сталкиваемся с коллекциями элементов, которые не 
// являются стандартными массивами, но похожи на них. Однако у таких коллекций 
// нет методов массива, и здесь на помощь приходит Array.from. В этом задании вы 
// научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
 
// Задание 3: 
// Напишите функцию, которая собирает все элементы <div> на странице, преобразует 
// их в массив и фильтрует только те из них, у которых есть атрибут data-active.
// Выведите отфильтрованный результат в консоль.
// */
 
// const divEl = document.querySelectorAll("div");
// console.log(divEl);
// // const arrEl = Array.from(divEl);
// const arrEl = [...divEl]
// console.log(arrEl);
 
// const filterArr = arrEl.filter((el) => {
//   return el.hasAttribute("data-active");
// });
// console.log(filterArr);

/*
Задание 4.
Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить, 
кто из них посетил какие уроки и кто из преподавателей вёл данные уроки. 
 
Необходимо: 
1. Создать Map объект, который будет использоваться для хранения соответствия 
между уроком и преподавателем, урок => преподаватель.
2. Необходимо создать Map объект, ключами которого будут объекты студентов,
а значениями будут Set объекты, которые будут хранить уроки, посещенные 
студентом.
*/

const lessonsTeacher = new Map();
const studentLessons = new Map();

const ivan = {
  name: "Иван",
};

const paul = {
  name: "Паша",
};

const lessonMath = "Математика";
const lessonHistory = "История";

const teacherMath = {
  name: "Dina",
};

const teacherHistory = {
  name: "Max",
};

lessonsTeacher.set(lessonMath, teacherMath).set(lessonHistory, teacherHistory);
studentLessons.set(ivan, new Set([lessonMath, lessonHistory]));
studentLessons.set(paul, new Set([lessonHistory]));

// Преподаватель по Математике: Смирнов.
console.log(
  `Преподаватель по математике: ${lessonsTeacher.get(lessonMath).name}`
);
// Уроки Ивана: Математика, История.
console.log(`Уроки Ивана: ${[...studentLessons.get(ivan)].join(", ")}`);
