import mongoose from "mongoose";

let LibrarySchema = new mongoose.Schema({
  libraryName: {
    type: String,
    required: true,
  },
  books: {
    type: [String],
    required: true,
  },
  creationDate: {
    type: Boolean,
    default: false,
  },

  bookstore: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bookstore",
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const LibraryModel = mongoose.model("Library", LibrarySchema, "librairies");
