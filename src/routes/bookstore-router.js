import express from "express";

const bookstoreRouter = express.Router();
import bookstoreController from "../controllers/bookstoreController";

// Get All Books from Bookstore
bookstoreRouter.get("/bookstore/:bookstoreId", bookstoreController.getAllBooks);

// Get Books by Filter
bookstoreRouter.get(
  "/bookstore?title=...&genre=...&language=...&price=...&age=...",
  bookstoreController.getBooksByFilter
);

// Add book to cart
bookstoreRouter.post(
  "/bookstore/:bookId/add-to-cart",
  bookstoreController.purchaseBook
);

// Buy a Book
bookstoreRouter.post("/bookstore/purchase", bookstoreController.purchaseBook);

// Create Bookstore
bookstoreRouter.post("/bookstore", bookstoreController.createPublisherPage);

// Add Books to Bookstore
bookstoreRouter.post(
  "/bookstore/add-book",
  bookstoreController.addBooksToBookstore
);

// Update Books in Bookstore
bookstoreRouter.put("/bookstore/:bookId", bookstoreController.updateBooks);

// Delete Book from Bookstore
bookstoreRouter.delete("/bookstore/:bookId", bookstoreController.deleteBook);

// Get Bookstore Analytics
bookstoreRouter.get("/bookstore/analytics", bookstoreController.getAnalytics);

export default bookstoreRouter;
