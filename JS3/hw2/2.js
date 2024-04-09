"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.


На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];
function renderProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = ""; // Очищаем контейнер перед отрисовкой

  initialData.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `<h2>${product.product}</h2>`;

    const reviewsList = document.createElement("ul");
    product.reviews.forEach((review) => {
      const reviewItem = document.createElement("li");
      reviewItem.textContent = review.text;
      reviewsList.appendChild(reviewItem);
    });

    const addReviewForm = document.createElement("form");
    addReviewForm.innerHTML = `
      <input type="text" id="reviewInput${product.id}" placeholder="Добавить отзыв">
      <button class="btnAdd" onclick="addReview('${product.id}')">Добавить</button>
    `;

    productDiv.appendChild(reviewsList);
    productDiv.appendChild(addReviewForm);
    productsContainer.appendChild(productDiv);
  });
}

function addReview(productId) {
  const reviewInput = document.getElementById(`reviewInput${productId}`);
  const reviewText = reviewInput.value;
  const btnEl = document.querySelector(".btnAdd");
  const inputEl = document.querySelector("input");

  if (inputEl.value.length < 5 || inputEl.value.length > 500) {
    alert("Отзыв должен быть от 5 до 500 символов");
    btnEl.disabled = true;
    inputEl.value = "";
    btnEl.disabled = false;
    return;
  }

  // if (reviewText.length < 5 || reviewText.length > 500) {
  //   alert("Отзыв должен быть от 5 до 500 символов");
  //   return;
  // }

  const product = initialData.find((product) => product.id === productId);
  const newReview = { id: uid(), text: reviewText };
  product.reviews.push(newReview);

  renderProducts();
}

renderProducts();
