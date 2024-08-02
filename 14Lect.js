const cookieParser = require('cookie-parser');    // use to show cookie in our terminal  
const express = require('express');
let app = express();

const bcrypt = require('bcrypt');  // it do encryption and decription 
const jwt = require('jsonwebtoken');        // use for jwt 

app.use(cookieParser());

// app.get("/",function(req,res) {
//   // res.cookie("name", "maadeha");
//   res.send("Done");
// })

// app.get("/read",function(req,res) {
//   // console.log(req.cookies);
//   res.send("read page");
// })

// app.get ("/",function(req,res){
//   bcrypt.genSalt(10,function(err,salt){
//     bcrypt.hash("hello",salt,function(err,hash){
//       console.log(hash); //$2b$10$CJWTx5q3DIGXXDmPGFsDUuGSuWwlXPklqCrmyL4rT4nkYHxDpn1y.
//     // console.log(salt); // this is the string we got $2b$10$sS0trr4lt0zpKhi/nfmihu
//     })
//   })
// })
 
// app.get("/",function(req,res){
//    bcrypt.compare("hello","$2b$10$CJWTx5q3DIGXXDmPGFsDUuGSuWwlXPklqCrmyL4rT4nkYHxDpn1y.",function(err, result){
//    console.log(result); //true 
//    });
// })

// jwt 3 parts say mil kay bana h 

app.get("/",function (req,res){
 let token =  jwt.sign({email:"maadeha@gmail.com"},"email-Hay") ;
 res.cookie("token",token)
 res.send("done");
//  console.log(token) 
 // => it is called as risky kay yeh boht sensitive h its a secret and it should't be hacked
})

app.get("/read",function (req,res){
  let data = jwt.verify(req.cookies.token,"email-Hay"); 
  console.log(data);
  // { email: 'maadeha@gmail.com', iat: 1722531653 }

  
  // console.log (jwt.verify(req.cookies.token)); 
  // { email: 'maadeha@gmail.com', iat: 1722531653 }
  // token aa gya h 
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hYWRlaGFAZ21haWwuY29tIiwiaWF0IjoxNzIyNTMxNjUzfQ.fqCXqnxR9LmIzb5vbvYE0kwnMDDbghtthV5daIzzBPo

})


app.listen(3000);
