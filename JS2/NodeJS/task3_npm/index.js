const express = require("express");

const app = express();

// app.use(express.static('static'))

app.get("/", (req, res) => {
  res.send('<h1>Welcome!</h1> <a href="/about">Link</a>');
});

app.get("/about", (req, res) => {
  res.send('<h1>Welcome, about</h1> <a href="/">Link</a>');
});

app.listen(4000)