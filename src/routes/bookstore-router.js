import express from "express";

const bookstoreRouter = express.Router();
import bookstoreController from "../controllers/bookstoreController";

// Get All Books from Bookstore
bookstoreRouter.get("/bookstore", bookstoreController.getAllBooks);

// Get Books by Filter
bookstoreRouter.get("/bookstore/filter", bookstoreController.getBooksByFilter);

// Buy a Book
bookstoreRouter.post(
  "/bookstore/:bookId/purchase",
  bookstoreController.purchaseBook
);

// Create Bookstore Publisher Page
bookstoreRouter.post(
  "/bookstore/publisher",
  bookstoreController.createPublisherPage
);

// Add Books to Bookstore
bookstoreRouter.post(
  "/bookstore/:bookId",
  bookstoreController.addBooksToBookstore
);

// Update Books in Bookstore
bookstoreRouter.put("/bookstore/:bookId", bookstoreController.updateBooks);

// Delete Book from Bookstore
bookstoreRouter.delete("/bookstore/:bookId", bookstoreController.deleteBook);

// Get Bookstore Analytics
bookstoreRouter.get("/bookstore/analytics", bookstoreController.getAnalytics);

export default bookstoreRouter;
