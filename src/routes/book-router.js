import express from "express";
import * as bookController from "../controllers/book-controller.js";
import validateRequest from "../middleware/validationMiddleware.js";
import { getAllBooksQuerySchema } from "../validationSchemas.js";


const bookRouter = express.Router();



// Get All Books
bookRouter.get(
  "/",
  bookController.getAllBooksController
);

// Review Book
bookRouter.post("/review/:bookId", bookController.reviewBookController);

export default bookRouter;
