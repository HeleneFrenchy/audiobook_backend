import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
2;
import { UserModel } from "../models/User.js";

const accessTokenSecret = "Booksaregreat!24";

export const hashPassword = (password) => {
  // Generate a salt
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export const createUser = (email, password, username) => {
  return UserModel.create({ email, password, username });
};

export const checkIfUserExists = (email) => {
  return UserModel.findOne({ email: email });
};

export const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

export const generateToken = (userId) => {
  let token = jwt.sign({ userId }, accessTokenSecret, {
    expiresIn: "14d",
  });
  return token;
};

export const verifyToken = (token) => {
  return jwt.verify(token, accessTokenSecret);
};

export const updateProfile = (userId, userData) => {
  console.log(userId, userData);
  const updatedUser = UserModel.findByIdAndUpdate(userId, userData, {
    new: true,
  });
  return updatedUser;
};

export const getProfile = (userId) => {
  return UserModel.findOne({ _id: userId });
};


