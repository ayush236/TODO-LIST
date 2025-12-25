const express = require('express');
const todolist = express.Router();

const controller = require("../controller/todocontroller")

todolist.get('/', controller.gettodoitem);
todolist.post('/', controller.createtodoitem);
todolist.delete('/:id', controller.deletetodoitem);
todolist.put('/:id/completed', controller.marktodoitem);

module.exports = todolist