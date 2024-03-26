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
    expiresIn: "1h",
  });
  return token;
};

export const verifyToken = (token) => {
  return jwt.verify(token, accessTokenSecret);
};

export const updateProfile = (userData) => {
  const { userId, username, email, password } = userData;
  const updatedUser = UserModel.findByIdAndUpdate(
    userId,
    { username, email, password },
    { new: true }
  );
  return updatedUser;
};

// export const verifyAccount = async (token) => {
//   try {

//     const user = await UserModel.findOne({ verificationToken: token });
//     if (!user) {
//       throw new Error("Invalid verification token");
//     }
//     user.isVerified = true;
//     user.verificationToken = undefined;
//     await user.save();
//     return user;
//   } catch (error) {
//     throw error;
//   }
// };

// export const forgotPassword = async (email) => {
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       throw new Error("User with the provided email address not found");
//     }
//     const resetToken = generateResetToken();

//     user.resetPasswordToken = resetToken;
//     user.resetPasswordExpires = Date.now() + 3600000;
//     await user.save();
//     await sendPasswordResetEmail(user.email, resetToken);
//     return;
//   } catch (error) {
//     throw error;
//   }
// };

// const generateResetToken = () => {};
