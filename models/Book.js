const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: { type: String, required: true },
  author: { type: Array, default:[] },
  description: { type: String},
  image: { type: String},
  link: { type: String},
  title: { type: String}
});

const Book = mongoose.model("Book", Book);

module.exports = Book;