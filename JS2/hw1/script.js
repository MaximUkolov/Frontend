// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const superElem = document.getElementById('super_link');
console.log(superElem);

// // 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardElem = document.querySelectorAll('.card-link');
cardElem.textContent = 'Ссылка';
console.log(cardElem);

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardElem = document.querySelectorAll('.card-body .card-link');
console.log(cardElem);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataElem = document.querySelector('[data-number="50"]');
console.log(dataElem);

// 5. Выведите содержимое тега title в консоль.

const titleTag = document.querySelector('title');
console.log(titleTag);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleElement = document.querySelector('.card-title').parentNode;
console.log(cardTitleElement);

// 7. Создайте тег 'p', запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const tagP = document.createElement('p');
tagP.textContent = 'Привет';
document.querySelector('.card').prepend(tagP);


// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();