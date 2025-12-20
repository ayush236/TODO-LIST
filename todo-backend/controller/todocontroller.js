const todoItem = require('../models/todolist')


exports.createtodoitem =async(req, res, next)=>{
    console.log(res.body);
    const{task, date} = req.body;
    const todolist = new todoItem ({ task, date})
    await todolist.save()
    res.status(200).json(todolist)

}