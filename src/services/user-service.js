import { UserModel } from "../models/User.js";
import { BookModel } from "../models/Book.js";

export const getAllBooksUser = async (userId) => {
  const user = await UserModel.findOne({ _id: userId });
  console.log(user);
  return user.books;
};

export const addBooksToLibrary = async (userId, bookIds) => {
  await UserModel.updateOne(
    { _id: userId },
    { $addToSet: { books: { $each: bookIds } } }
  );
  return true;
};

export const deleteBookFromLibrary = async (userId, bookId) => {
  await UserModel.updateOne({ _id: userId }, { $pull: { books: bookId } });
  return true;
};

export const addToCartBook = async (userId, bookId) => {
  await UserModel.updateOne({ _id: userId }, { $addToSet: { cart: bookId } });
};

export const deleteFromCartBook = async (userId, bookId) => {
  await UserModel.updateOne({ _id: userId }, { $pull: { cart: bookId } });
};

export const getCart = async (userId) => {
  const user = await UserModel.findOne({ _id: userId });
  return user.cart;
};

export const clearCart = async (userId) => {
  await UserModel.updateOne({ _id: userId }, { $set: { cart: [] } });
};

export const purchaseBook = async (userId, bookId) => {
  await UserModel.purchase({ userId, bookId });
  return true;
};
