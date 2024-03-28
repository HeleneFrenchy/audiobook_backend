import express from "express";

const libraryRouter = express.Router();

import libraryController from "../controllers/libraryController";

// Create Library
libraryRouter.post("/library", libraryController.createLibrary);

// Get All Books from Library
libraryRouter.get("/library", libraryController.getAllBooks);

// Add Book to Library
libraryRouter.post(
  "/library/:libraryId/:bookId",
  libraryController.addBookToLibrary
);

// Delete Book from Library
libraryRouter.delete(
  "/library/:libraryId/:bookId",
  libraryController.deleteBookFromLibrary
);

// Review Book
// libraryRouter.post("/library/review/:bookId", libraryController.reviewBook);

export default libraryRouter;
