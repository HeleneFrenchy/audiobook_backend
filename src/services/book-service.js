import { BookModel } from "../models/Book.js";

export const getAllBooks = async ({ title, age, language, price, author, description, audio }) => {
  const filters = {};

  if (title) {
    filters.title = title;
  }

  if (author) {
    filters.author = author;
  }

  if (age) {
    filters.age = age;
  }
  if (language) {
    filters.language = language;
  }
  if (price) {
    filters.price = price;
  }

  if (description) {
    filters.description = description;
  }

   if (audio) {
     filters.audio = audio;
   }

  return BookModel.find(filters);
};

