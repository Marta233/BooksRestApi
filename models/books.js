const mongoose = require("mongoose");
const Author = require("./author");
const yup = require("yup");

// Book schema
const BookSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
    minlengeth:3,
    maxlengeth:50
  },

  author: Author.schema,
  gener: {
    type:String,
    required:true,
    minlengeth:3,
    maxlengeth:20
  },
});
// const validateBook = (book) => {
//   const schema = yup.object().shape({
//     bookName: yup.string().required().min(3).max(50),
//     authorName: yup.string().required().min(3).max(40),
//     authorAge: yup.string().required().min(10).max(100),
//     gener: yup.string().required().min(3).max(20),
//   });
//   return schema
//     .validate(book)
//     .then((book) => book)
//     .catch((error) => console.log(error));
// };

exports.Book = new mongoose.model("Book", BookSchema);
// exports.validateBook = validateBook;