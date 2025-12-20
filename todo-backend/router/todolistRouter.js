const express = require('express');
const todolist = express.Router();

const controller = require("../controller/todocontroller")

todolist.post('/', controller.createtodoitem);

module.exports = todolist