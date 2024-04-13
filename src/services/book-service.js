import { UserModel } from "../models/User.js";
import { BookModel } from "../models/Book.js";

export const getAllBooks = async ({ title, age, language, price }) => {
  const filters = {};

  if (title) {
    filters.title = title;
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

  return BookModel.find(filters);
};

export const reviewBook = async (userId, bookId, rating, comment) => {};
