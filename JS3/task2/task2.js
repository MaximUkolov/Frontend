// /*
// Задание 1:
// Давайте создадим класс для управления банковским счетом. В этом классе будет
// приватное свойство для хранения текущего баланса, а также методы для внесения
// и снятия денег со счета.
// Необходимо реализовать класс BankAccount, в нем:
// 1. Приватное свойство #balance, которое инициализируется значением 0 и
// представляет собой текущий баланс счета.
// 2. Геттер balance, который позволит получить информацию о текущем балансе.
// 3. Метод deposit(amount), который позволит вносить средства на счет.
// Убедитесь, что сумма внесения не отрицательная, что значение является
// нормальным числом и дробная часть не превышает двух знаков, в противном случае
// выбрасывайте соответствующую ошибку.
// 4. Метод withdraw(amount), который позволит снимать средства со счета.
// Убедитесь, что сумма внесения не отрицательная, что значение является
// нормальным числом и дробная часть не превышает двух знаков, и сумма снятия
// не может превышать текущий баланс аккаунта в противном случае выбрасывайте
// соответствующую ошибку.
// */

// class BankAccount {
//   #balance = 0;
//   getBalance() {
//     return Math.round(this.#balance * 100) / 100;
//   }
//   deposit(amount) {
//     this.#amountIsCorrect(amount);
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     this.#amountIsCorrect(amount);
//     if (amount > this.#balance) {
//       throw new Error("Сумма снятия не может превышать текущий баланс");
//     }
//     this.#balance -= amount;
//   }
//   #amountIsCorrect(amount) {
//     if (!Number.isFinite(amount)) {
//       throw new Error("Вы передали не корректное число");
//     }
//     if (amount <= 0) {
//       throw new Error("Сумма не может быть отрицательной или равна 0");
//     }
//     // if (amount % 0.01 !== 0) {
//     //     throw new Error('Дробная часть суммы не может превышать 2 знака');
//     // }
//     const arr = amount.toString().split(".");
//     if (arr[1]?.length > 2) {
//       throw new Error("Дробная часть суммы не может превышать 2 знака");
//     }
//   }
// }

// const account = new BankAccount();

// // console.log(account.getBalance());

// // account.deposit(100);

// // console.log(account.getBalance());

// // account.withdraw("25");

// // console.log(account.getBalance());



// _________________________________________________________________________
// /*
// Задание 2:
// Мы создаем приложение. У нас планируется два вида пользователей, обычные и
// премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.

// 1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые
// должны создаваться при создании экземпляра класса).
// 2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
// PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
// действия премиум аккаунта, должно задаваться при создании объекта), а у
// RegularUser такого свойства нет.
// 3. Создайте функцию getAccountInfo(user), которая принимает объект класса User
// и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
// использовать instanceof для проверки типа переданного пользователя и дать
// соответствующий ответ из функции (в свободном формате).
// */

// class User {
//     constructor(name, surname) {
//         if (this.constructor === User) {
//             throw new Error('Cannot create instance of abstract class User');
//         }
//         this.name = name;
//         this.surname = surname;
//     }
// }

// class PremiumUser extends User {
//     constructor(name, surname, premiumExpiration) {
//         super(name, surname);
//         this.premiumExpiration = premiumExpiration;
//     }
// }

// class RegularUser extends User {

// }

// function getAccountInfo(user) {
//     if (user instanceof PremiumUser) {
//         console.log(`${user.name} ${user.surname} - премиум аккаунт срок действия: ${user.premiumExpiration}`);
//     } else if (user instanceof RegularUser) {
//         console.log(`${user.name} ${user.surname} - обычный аккаунт`);
//     } else {
//         console.log('Ошибка');
//     }
// }

// // const user = new PremiumUser('Dina', 'Petrova', "2024");

// // const usrr2 = new RegularUser("Maximo", "Sidorov");

// // getAccountInfo(user);

// // getAccountInfo(usrr2);

// // getAccountInfo({});

// // const user3 = new User("Dina", "Petrova");

// __________________________________________________________________________________
// /*
// Задание 3: 
// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, 
// является ли введенное значение числом или нет, и дать соответствующий ответ.
// 1. Создайте HTML-структуру:
 
// ```
// <input class="number-input" type="text"  placeholder="Введите число">
// <button class="check-button">Проверить</button>
// <div class="message"></div>
// ```
 
// Необходимо обрабатывать событие проверки числа пользователем, проверяющая 
// функция должна использовать try и catch для проверки вводимого значения.
// */
 
// const inputEl = document.querySelector('.number-input');
 
// const buttonEl = document.querySelector('.check-button');
 
// const messageEl = document.querySelector('.message');
 
// // buttonEl.addEventListener('click', () => {
// //     if (Number.isFinite(+inputEl.value) && inputEl.value !== '') {
// //         messageEl.textContent = 'Число';
// //     } else {
// //         messageEl.textContent = 'Число не число';
// //     }
// // });
 
// buttonEl.addEventListener('click', () => {
//     try {
//         if (!Number.isFinite(+inputEl.value) || inputEl.value === '') {
//             throw new Error('Не число');
//         }
//         messageEl.textContent = 'Число';
//     } catch (error) {
//         messageEl.textContent = error.message;
//     }
// });



// ___________________________________________________________________________________


// /*
// Задание 4:
// Пользователи вашего сайта могут добавлять элементы в список. Но есть условие: 
// введенное значение должно содержать от 3 до 10 символов.
 
// Создайте HTML-структуру:
 
// ```
// <input type="text" class="user-input">
// <button class="add-button">Добавить</button>
// <ul class="item-list"></ul>
// <div class="error-message"></div>
// ```
 
// Необходимо обрабатывать событие добавления элемента в список. Функция, 
// обрабатывающая событие, должна выбрасывать исключение, если длина введенного 
// значения не соответствует требованиям.
// Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
// Не важно, была ошибка или нет, после того как мы совершим попытку добавления 
// данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
// */
 
// const inputUserEl = document.querySelector('.user-input');
// const buttonAddEl = document.querySelector('.add-button');
// const messageEl = document.querySelector('.error-message');
// const itemListEl = document.querySelector('.item-list');
 
// // buttonAddEl.addEventListener('click', () => {
// //     const userInput = inputUserEl.value;
// //     if (userInput.length < 3 || userInput.length > 10) {
// //         messageEl.textContent = 'Длина введенного значения не соответствует требованиям!';
// //     } else {
// //         const liEl = document.createElement('li');
// //         liEl.textContent = userInput;
// //         itemListEl.append(liEl);
// //         inputUserEl.value = '';
// //         messageEl.textContent = '';
// //     }
// //     console.log('Попытка добавления элемента завершена!');
// // })
 
// buttonAddEl.addEventListener('click', () => {
//     try {
//         const userInput = inputUserEl.value;
//         if (userInput.length < 3 || userInput.length > 10) {
//             throw new Error('Длина введенного значения не соответствует требованиям!');
//         }
//         const liEl = document.createElement('li');
//         liEl.textContent = userInput;
//         itemListEl.append(liEl);
//         inputUserEl.value = '';
//         messageEl.textContent = '';
//     } catch (error) {
//         messageEl.textContent = error.message;
//     } finally {
//         console.log('Попытка добавления элемента завершена!');
//     }
// })