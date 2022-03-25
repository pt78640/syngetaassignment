const express = require("express");
const connect=require("./config/connect");
const bookController = require("./controller/book.controller")
const port=process.env.PORT ||1234;
const app=express();
app.use(express.json());
app.use("/book",bookController);
app.listen(port,async()=>{
    await connect();
    console.log(`server is live on ${port} `)
});