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
