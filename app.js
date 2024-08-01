// const cookieParser = require('cookie-parser');    // use to show cookie in our terminal  
const express = require('express');
let app = express();

const bcrypt = require('bcrypt');  // it do encryption and decription 


// app.use(cookieParser());

// app.get("/",function(req,res) {
//   // res.cookie("name", "maadeha");
//   res.send("Done");
// })

app.get("/read",function(req,res) {
  // console.log(req.cookies);
  res.send("read page");
})

// app.get ("/",function(req,res){
//   bcrypt.genSalt(10,function(err,salt){
//     bcrypt.hash("hello",salt,function(err,hash){
//       console.log(hash); //$2b$10$CJWTx5q3DIGXXDmPGFsDUuGSuWwlXPklqCrmyL4rT4nkYHxDpn1y.
//     // console.log(salt); // this is the string we got $2b$10$sS0trr4lt0zpKhi/nfmihu
//     })
//   })
// })
 
app.get("/",function(req,res){
   bcrypt.compare("hello","$2b$10$CJWTx5q3DIGXXDmPGFsDUuGSuWwlXPklqCrmyL4rT4nkYHxDpn1y.",function(err, result){
   console.log(result); //true 
   });
})
// jwt encoded text ko  
// jwt 3 parts say mil kay bana h 


app.listen(3000);
