// npm i express bcrypt jsonwebtoken cookie-parser

const express = require('express');
const app = express();

app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use()

app.get('/',function(req,res){
  res.send("Welcome");
})

app.listen(3000);