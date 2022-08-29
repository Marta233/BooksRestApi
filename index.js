const express = require('express');

const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URL,{useNewUrlParser:true}
    )
    .then(() => {
   console.log("Connected to mongoodb atlas!")
}).catch.log(error => {
    console.log("somthing erong ahppen", error);
})
// start server
app.listen(PORT,() => {
    console.log("server start at PORT", PORT);
})