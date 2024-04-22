import express from "express";
import * as userController from "../controllers/user-controller.js";
import { authenticateJWT } from "../middleware/auth-middleware.js";
import validateRequest from "../middleware/validationMiddleware.js";

import {
  getAllBooksUserQuerySchema,
  deleteBookSchema,
  addToCartSchema,
  deleteFromCartSchema,
} from "../validationSchemas.js";

const userRouter = express.Router();



// Get All Books from User Library
userRouter.get(
  "/books",
  authenticateJWT,
  userController.getAllBooksUserController
);


// Delete Book from User Library
userRouter.delete(
  "/books/:bookId",
  validateRequest(deleteBookSchema, "params"),
  authenticateJWT,
  userController.deleteBookFromLibraryController
);
userRouter.get(
  "/cart",
  authenticateJWT,
  userController.getUserCartController
);


// Add book to cart
userRouter.post(
  "/:bookId/cart",
  validateRequest(addToCartSchema),
  authenticateJWT,
  userController.AddToCartBookController
);

// delete book from cart
userRouter.delete(
  "/:bookId/cart",
  validateRequest(deleteFromCartSchema),
  authenticateJWT,
  userController.DeleteFromCartBookController
);

// Buy a Book
userRouter.post("/purchase",authenticateJWT, userController.purchaseBookController);



export default userRouter;
