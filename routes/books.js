const express = require('express');
const router = express.Router();
const {Book} = require('../models/books');



// post: creat a new Book
router.post('/',(req, res) => {
    // const error = await validateBook(req.body);
    // if (error.message) res.status(400).send(error.message);
  
    book = new Book({
      name:req.body.bookName,
      author:{
        name:req.body.authorName,
        age:req.body.authorAge,
      },
      gener:req.body.gener,
    });
  
    book
      .save()
      .then((book) => {
        res.send(book);
      })
      .catch((error) => {
        res.status(500).send("Book was not stored in db");
      });
  });

module.exports = router;