import express from "express";

const libraryRouter = express.Router();

import libraryController from "../controllers/libraryController";

// Create Library
libraryRouter.post("/library", libraryController.createLibrary);

// Get All Books from Library
libraryRouter.get("/library", libraryController.getAllBooks);

// Add Book to Library
libraryRouter.post("/library/:bookId", libraryController.addBookToLibrary);

// Delete Book from Library
libraryRouter.delete(
  "/library/:bookId",
  libraryController.deleteBookFromLibrary
);

// Review Book
libraryRouter.post("/library/review/:bookId", libraryController.reviewBook);
