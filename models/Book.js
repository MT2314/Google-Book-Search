const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: Array, default:[] },
  description: { type: String},
  image: { type: String},
  link: { type: String},
  read: {type: Boolean, default: false},
  favourite: {type: Boolean, default: false}

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;