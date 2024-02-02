const express=require("express");
const app=express();
const route=require("./routes/route");
require('dotenv').config();
const mongoose=require('mongoose')
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: 'secret_key',
  resave: true,
  saveUninitialized: true,
}));

 mongoose.connect("mongodb+srv://gwebs:Gwebs123@cluster0.f3hyp5s.mongodb.net/user"
).then(()=>console.log("mongodb is connected"))
 .catch(err=>console.log(err))

app.use('/',route) 



app.listen(process.env.PORT ,()=>{
  console.log("server is running on "+(process.env.PORT))
});