// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.

const http = require("http");
const { createElement } = require("react");
const server = http.createServer(req, res);
if (req.url === "/") {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end("<h1>/</h1>");
} else if (req.url === "/about") {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.end("<h1>/about</h1>");
  document.querySelector("div");
  const aHref = createElement('a')
  aHref.textContent = 'На главную'
  aHref.href = '127.0.0.1:4000'
}

server.listen(4000);
