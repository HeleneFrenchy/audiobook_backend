import mongoose from "mongoose";

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },

    bookstore: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bookstore",
      },
    ],
    library: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Library",
      },
    ],
});

export const UserModel = mongoose.model("User", UserSchema, "users");
