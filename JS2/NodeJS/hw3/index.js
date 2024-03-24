// Напишите HTTP сервер на express и реализуйте два обработчика “/” и “/about”, где:

// — На каждой странице реализован счетчик просмотров
// — Значение счетчика необходимо сохранять в файл каждый раз, когда обновляется страница
// — Также значение счетчика должно загружаться из файла, когда запускается обработчик страницы
// — Таким образом счетчик не должен обнуляться каждый раз, когда перезапускается сервер

// const express = require("express");
// const fs = require("fs");

// const app = express();
// let viewsData = {};

// app.use((req, res, next) => {
//   try {
//     const data = fs.readFileSync("viewsData.json", "utf8");
//     viewsData = JSON.parse(data);
//   } catch (err) {
//     console.error(err);
//   }
//   next();
// });

// app.use((req, res, next) => {
//   fs.writeFileSync("viewsData.json", JSON.stringify(viewsData, null, 2));
//   next();
// });

// app.get("/", (req, res) => {
//   const url = "/";
//   viewsData[url] = viewsData[url] ? viewsData[url] + 1 : 1;
//   res.send(
//     `<h1>Home Page - Views: ${viewsData[url]}</h1> <a href="/about">Link /about</a>`
//   );
// });

// app.get("/about", (req, res) => {
//   const url = "/about";
//   viewsData[url] = viewsData[url] ? viewsData[url] + 1 : 1;
//   res.send(
//     `<h1>About Page - Views: ${viewsData[url]}</h1> <a href="/">Link /</a>`
//   );
// });


const express = require('express');
const fs = require('fs');
const app = express();


app.get('/', (req, res) => {
    let viewsData = loadViewsData();
    const url = '/';
    viewsData[url] = viewsData[url] ? viewsData[url] + 1 : 1;
    saveViewsData(viewsData);
    res.send(`<h1>Home Page - Views: ${viewsData[url]}</h1> <a href="/about">Link /about</a>`);
});

app.get('/about', (req, res) => {
    let viewsData = loadViewsData();
    const url = '/about';
    viewsData[url] = viewsData[url] ? viewsData[url] + 1 : 1;
    saveViewsData(viewsData);
    res.send(`<h1>About Page - Views: ${viewsData[url]}</h1> <a href="/">Link /</a>`);
});

function loadViewsData() {
    try {
        const data = fs.readFileSync('viewsData.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return {};
    }
}

function saveViewsData(viewsData) {
    fs.writeFileSync('viewsData.json', JSON.stringify(viewsData, null, 2));
}

app.listen(4000);
