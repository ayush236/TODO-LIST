const todoItem = require('../models/todolist')


exports.createtodoitem = async (req, res, next)=>{
    console.log(req.body);
    const{task, date} = req.body;
    const todolist = new todoItem ({ task, date});
    await todolist.save()
    res.status(200).json(todolist)

}

exports.gettodoitem = async (req, res, next)=>{
    try{
        const item = await todoItem.find();
    res.json(item)
    }
    catch(error){
        res.status(500).json({message: error.message});

    }
    
}

exports.deletetodoitem =async(req, res, next)=>{
    try{
        const {id} = req.params
        await todoItem.findByIdAndDelete(id);
        res.status(204).json({_id:id})

    }catch(error){
        res.status(500).json({message: error.message});
    }

}

exports.marktodoitem = async(req, res, next)=>{
    try{
        const{id} = req.params;
        const todoItem = await todoItem.findById(id);
        todoItem.complete = true;
    }catch(error){
        res.status(500).json({message: error.message})
    }
}