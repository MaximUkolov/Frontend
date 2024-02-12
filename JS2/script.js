// const pEl = document.querySelector('p');
// console.log(pEl);
// const pWwwEl = document.querySelector('.www');
// console.log(pWwwEl);
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// Заменить href, на значение https://developer.mozilla.org/ru/
//const linkDev = document.querySelector('.link');
//linkDev.textContent = 'link text js';
//linkDev.href = 'https://developer.mozilla.org/ru/';
// 2. Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
//const linkImg = document.querySelector('.photo');
//linkImg.src = 'https://trikky.ru/wp-content/blogs.dir/1/files/2021/10/20/image-862209192214338119696.gif';

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// const divContent = document.querySelector('.content');    -    обращаемся к селектору
// const newP = document.createElement('p');                 -    создаем новый объект
// newP.textContent = 'Новый текстовый элемент';             -    добавляем в него текст
// divContent.appendChild(newP);                             -    перекидываем его в дочерний блок
// newP.remove();                                            -    удаляем
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const contentEl = document.querySelector(".content");
// const btnEl = document.createElement("button");
// btnEl.textContent = "надпись";
// console.log(contentEl);
// contentEl.append(btnEl);

// let count = 0;
// btnEl.onclick = function () {
//   count++;
//   console.log(count);
// };

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const btn1 = document.createElement('button');
// btn1.textContent = 'Отправить';
// content1.append(btn1);
// btn1.onclick = () => {
//     btn1.textContent = 'Текст отправлен';
// }

// task1

/* <div class="block">
	
    </div>
    Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
    Цвет текста синий
    Рамка сплошная черная
    Цвет фона #f8f8f8
    Внутренний отступ 16px
    Добавить данному блоку класс item_1 (использовать setAttribute) */

// const block = document.querySelector(".block");
// const button = document.createElement("button");
// const divEl = document.createElement("div");
// divEl.classList.add("item");
// divEl.textContent = "Элемент внтури";
// divEl.style.color = "blue";
// divEl.style.border = "1px solid black";
// divEl.style.backgroundColor = "#f8f8f8";
// divEl.style.padding = "16px";
// divEl.setAttribute("class", "item_1 item");
// block.appendChild(divEl);

// task 2

// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textElem = document.querySelector('.text')
// console.log(textElem.previousElementSibling)
// console.log(textElem.parentElement)
// console.log(textElem.parentElement.previousElementSibling)
// console.log(textElem.parentElement.parentElement)

// Task 3

// const h2El = document.querySelector('h2');
// let currentEl = h2El;

// while (currentEl.parentElement !== null) {
//             currentEl = currentEl.parentElement;
//             console.log(currentEl);
// }

//task4

/* <form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, 
а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
У поля ввода должна появиться рамка красного цвета */

// const formEl = document.querySelector('.form');
// const btnEl = document.querySelector('.btn');
// const inputEl = document.querySelector('.input');

// const warningEl = document.createElement('h2');
// formEl.append(warningEl);
// btnEl.onclick = function () {
//   if (input.value) {
//     warningEl.textContent = "";
//     inputEl.style.border = "1px solid black";
//   } else {
//     warningEl.textContent = "Вы не заполнили поле ввода";
//     inputEl.style.border = "1px solid red";
//   }
// };

// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// const btn = document.querySelector('.btn')
// console.log("страница загрузилась");

// btn.onclick = function () {
//   console.log("событие onclick");
// }

// btn.addEventListener("click",
// function() {
//   console.log("событие addEventListener");
// }
// )

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const btn3 = document.querySelector('.btn3')
// const btn4 = document.querySelector('.btn4')
// const btn5 = document.querySelector('.btn5')

// btn1.addEventListener("click",
// function() {
//   console.log("Кнопка 1");
// }
// )

// btn2.addEventListener("click",
// function() {
//   console.log("Кнопка 2");
// }
// )

// btn3.addEventListener("click",
// function() {
//   console.log("Кнопка 3");
// }
// )

// let a = 0
// btn4.addEventListener("click",
// function() {
//   a++
//   console.log(a);
// }
// )

// btn5.addEventListener("click",
// function() {
//   btn5.textContent = "Вы нажали на эту кнопку"
//   console.log("Кнопка 5")
// }
// )

// Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// // Task 3
//         // 1. Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
//         const h1ButtonEl = document.createElement('button')
//         h1ButtonEl.textContent = 'Add title';
//         fiveButtonEl.parentElement.appendChild(h1ButtonEl);

//         const h1El = document.createElement('h1');
//         h1El.textContent = 'Новый заголовок';

//         h1ButtonEl.addEventListener('click', function (e) {
//             h1ButtonEl.parentElement.appendChild(h1El);
//         });

//         // 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
//         const h1DelButtonEl = document.createElement('button')
//         h1DelButtonEl.textContent = 'Delete title';
//         fiveButtonEl.parentElement.appendChild(h1DelButtonEl);

//         h1DelButtonEl.addEventListener('click', function (e) {
//             if (h1DelButtonEl.parentElement.contains(h1El)) {
//                 h1DelButtonEl.parentElement.removeChild(h1El);
//             }
//         });

//         // 3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”
//         const hoverButtonEl = document.createElement('button')
//         hoverButtonEl.textContent = 'Hover button';
//         fiveButtonEl.parentElement.appendChild(hoverButtonEl);

//         hoverButtonEl.addEventListener('mouseover', function (e) {
//             console.log('вы навели на данную кнопку');
//         });

//         hoverButtonEl.addEventListener('mouseleave', function (e) {
//             console.log('Наведения на кнопку больше нет');
//         });

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const listEls = document.querySelector('.list');
// const buttonEl10 = document.querySelector('.button10');
// const buttonEl11 = document.querySelector('.button11');
// const buttonEl12 = document.querySelector('.button12');

// buttonEl10.addEventListener('click', function (e) {
//     const newLi = document.createElement('li');
//     newLi.textContent ='новый элемент списка';
//     listEls.append(newLi);
//     newLi.classList.add('item');
// });

// buttonEl11.addEventListener('click', function (e) {
//     const listEl = document.querySelector('.item');
//     listEl.remove();
// })

// buttonEl12.addEventListener('click', function (e) {
//     buttonEl12.classList.add('click');
// })

// ------------------------------------------------------------------------------------------------------------------ sem4

// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// console.log(agree); // js сам ловит id-шники
// myForm.addEventListener('submit', function(event) {
// event.preventDefault();
// const checkbox = document.getElementById('agree');
// const errorMessage = document.getElementById('error-message');

// errorMessage.textContent = checkbox.checked ? '' : 'Необходимо согласиться с условиями';
// // if (!checkbox.checked) {
// // errorMessage.textContent = 'Необходимо согласиться с условиями';
// // } else {
// // errorMessage.textContent = '';
// // // По идее, здесь должен быть код для отправки формы.
// // }
// });
// document.getElementById('myForm').addEventListener('submit', function(event) {
// event.preventDefault();
// const checkbox = document.getElementById('agree');
// const errorMessage = document.getElementById('error-message');

// if (!checkbox.checked) {
// errorMessage.textContent = 'Необходимо согласиться с условиями';
// } else {
// errorMessage.textContent = '';
// // По идее, здесь должен быть код для отправки формы.
// }
// });

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести сообщение “Кофе закончился”

// const form = document.querySelector(".form");
// const btnTea = document.querySelector("#tea");
// const btnCoffee = document.querySelector("#coffe");
// const btnEl = document.querySelector("#submit");
// const message = document.querySelector(".message");
// form.addEventListener("submit", (e) => {
// e.preventDefault();
//     if (btnTea.checked) {
//         message.textContent = `Чай закончился`;
//     }
//     if (btnCoffee.checked) {
//         message.textContent = `Кофе закончился`;
//     }
// });

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// const changeInputEl = document.querySelector('.change');
// const titleEl = document.querySelector('.title');

// changeInputEl.addEventListener('input', function (e) {
// titleEl.textContent = e.target.value;
// });

// -------------------------------------------------------------------sem5

/*ссылка https://api.coindesk.com/v1/bpi/currentprice.json*/

