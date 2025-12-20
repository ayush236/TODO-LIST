const express = require('express');
const todolist = express.Router();

const controller = require("../controller/todocontroller")

todolist.post('/', controller.createtodoitem);

model.exports = todolist