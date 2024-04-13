import mongoose from "mongoose";

let BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  language: {
    type: String,
    required: true,
  },
});

export const BookModel = mongoose.model("Book", BookSchema, "books");
