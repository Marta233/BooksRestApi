const express = require('express');

const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const booksRoute = require('./routes/books');
const winston = require('winston');

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//create a logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
      new winston.transports.Console({
          format:winston.format.combine(
              winston.format.colorize({all:true})
          )
      }),
      new winston.transports.File({ filename: 'error.log', level:"error" })
    ]
  });

// routes
app.use('/api/books', booksRoute)


mongoose
    .connect(process.env.MONGO_URL,{useNewUrlParser:true}
    )
    .then(() => {
   logger.log("info", "connected to mongodb atlas");
}).catch((error) => {
    logger.log("error", error);
});
// start server
app.listen(PORT,() => {
    console.log("server start at PORT", PORT);
})