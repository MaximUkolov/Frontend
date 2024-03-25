const joi = require("joi");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const userDbPath = path.join(__dirname, "users.json");
app.use(express.json());
let uniqueId = 1;

const userSchema = joi.object({
  firstName: joi.string().required(),
  secondName: joi.string().required(),
  age: joi.number().required(),
  city: joi.string().required(),
});

app.get("/users", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath, "utf8"));
  res.send({ users });
});

app.get("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath, "utf8"));
  const findUser = users.find((user) => {
    return user.id === Number(req.params.id);
  });
  res.send({ user: [findUser] });
});

app.post("/users", (req, res) => {
  const result = userSchema.validate(req.body);

  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
  uniqueId++;
  const users = JSON.parse(fs.readFileSync(userDbPath, "utf8"));
  users.push({ id: uniqueId, ...req.body });
  fs.writeFileSync(userDbPath, JSON.stringify(users, null, 2));
  res.send({ id: uniqueId });
});

app.put("/users/:id", (req, res) => {
  const result = userSchema.validate(req, body);

  if (result.error) {
    return res.status(404).send({ error: result.error.details });
  }
  const users = JSON.parse(fs.readFileSync(userDbPath, "utf8"));
  const findUser = users.find((user) => {
    return user.id === Number(req.params.id);
  });
  if (findUser) {
    findUser.firstName = req.body.firstName;
    findUser.secondName = req.body.secondName;
    findUser.age = req.body.age;
    findUser.city = req.body.city;
    fs.writeFileSync(userDbPath, JSON.stringify(users, null, 2));
    res.send({ user: findUser });
  } else {
    res.send({ user: null });
  }
});

app.delete("/users/:id", (req, res) => {
  const users = JSON.parse(fs.readFileSync(userDbPath, "utf8"));
  const findUser = users.findIndex((user) => {
    return user.id === Number(req.params.id);
  });
  users.splice(findUser, 1);
  fs.writeFileSync(userDbPath, JSON.stringify(users, null, 2));
  res.send({ id: req.params.id });
});

app.listen(4000);
