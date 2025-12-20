const mongoose = require('mongoose')

const TodolistSchema = new mongoose.Schema({
    task:{
        type: String,
        requide: true
    },
    date:{
        type: Date,
        requide: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    CreatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("todoItem", TodolistSchema);