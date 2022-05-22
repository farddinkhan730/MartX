const express=require("express");
const app=express();
const errorMiddleware=require('./middleware/error');
const cookeiParser=require('cookie-parser')

// const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
// const path = require("path");


// // Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({ path: "backend/config/config.env" });
//   }


app.use(express.json());
app.use(cookeiParser());

// route imports
const product=require("./router/productRoute")
const user=require("./router/userRouts")
const order=require("./router/orderRoute")

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use(errorMiddleware);


module.exports=app;