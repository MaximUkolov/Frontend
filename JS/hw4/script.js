// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.

// let arr = [1, 2, 3];
// arr.forEach(value => {
//     console.log(value);
// });

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.

// let arr = [1, 2, 3];
// console.log(arr.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.

// let arr = ["a", "b", "c"];
// console.log(arr);
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);

// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
// }
// console.log(arr);

// Узнайте длину следующего массива:

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// console.log(arr);
// arr.push(4);      /*Добавляет последний эл-т в массиве*/
// arr.push(5);
// console.log(arr);

// Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

// const arr = [1, 2, 3, 4, 5];
// arr.pop();  /*Удаляет последний эл-т в массиве*/
// arr.pop();
// console.log(arr);

// С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i < 34; i++) {
//     console.log(i);
// }

// С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.

// for (let i = 1; i < 100; i=i+2) {
//     console.log(i);
// }

// С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.

// let num = 15;
// let i = 0;
// while (num < 1000) {
//     num = num * 3;
//     i++
// }
// console.log(i, num);

// Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];
// arr.map(value => {
//     if(value > 2 && value < 10) {
//         console.log(value);
//     }
// })

// Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// for (let i = 2; i < 101; i = i + 2) {
//     sum = sum + i;
// }
// console.log(sum);

// Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// arr.forEach(function (value) {
//     sum = sum + value;
// });
// console.log(sum);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let str = "-";
// for (let i = 1; i <= 9; i++) {
//   str = str + i + "-";
// }
// console.log(str);


// Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

// const arr = [2, 5, 9, 0, 3, 1, 4];
// let i = 0;
// while (arr[i] != 0) {
//     console.log(arr[i]);
//     i++
// }