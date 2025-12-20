//core module
const express = require("express");
const  Path = require('path');
const {default: Mongoose} = require('mongoose');
const cors = require('cors') 

const DB_path = "mongodb+srv://House_Rental-db:root%40123@ayush.lwg3asu.mongodb.net/todo?retryWrites=true&w=majority&appName=AYUSH";



const todolist = require('./router/todolistRouter');
const rootDir = require('./utils/path');

const app = express();

app.use(express.static(Path.join(rootDir,"public")));
app.use(express.urlencoded());
app.use(cors);
app.use(express.json)

app.use('/todo/items', todolist)



const PORT = 3000;

Mongoose.connect(DB_path).then(()=>{
  console.log('Connected to Mongoose')
  app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
}).catch(error=>{
  console.log('occured in error',error);
})
  


