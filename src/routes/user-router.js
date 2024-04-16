import express from "express";

const userRouter = express.Router();

import * as userController from "../controllers/user-controller.js";
import { authenticateJWT } from "../middleware/auth-middleware.js";

// Get All Books from User Library
userRouter.get("/books", authenticateJWT, userController.getAllBooksUserController);

// Add Book to User Library
userRouter.post("/books",authenticateJWT, userController.addBookToLibraryController);

// Delete Book from User Library
userRouter.delete(
  "/books/:bookId",authenticateJWT,
  userController.deleteBookFromLibraryController
);
userRouter.get(
  "/cart",
  authenticateJWT,
  userController.getUserCartController
);


// Add book to cart
userRouter.post("/:bookId/cart",authenticateJWT, userController.AddToCartBookController);

// delete book from cart
userRouter.delete("/:bookId/cart",authenticateJWT, userController.DeleteFromCartBookController);

// Buy a Book
userRouter.post("/purchase",authenticateJWT, userController.purchaseBookController);



export default userRouter;
