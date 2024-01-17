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













{/* <div class="block">
	
    </div>
    Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
    Цвет текста синий
    Рамка сплошная черная
    Цвет фона #f8f8f8
    Внутренний отступ 16px
    Добавить данному блоку класс item_1 (использовать setAttribute) */}


const divBlock = document.querySelector('.block');
const divItem = document.createElement('div');
const textElem = document.createElement('p');
divItem.appendChild(divBlock);
textElem.appendChild(divItem);

