// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект:

const fs = require("fs");
const path = require("path");

// const person = {
//   name: "Ivan",
//   surname: "Ivanov",
//   age: 30,
//   city: "Moscow"
// };

const jsonPath = path.join(__dirname, "person.json");
console.log(jsonPath);

const person = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
person.age = person.age - 10;
person.city = "Ekaterinburg";

fs.writeFileSync(jsonPath, JSON.stringify(person, null, 2));
