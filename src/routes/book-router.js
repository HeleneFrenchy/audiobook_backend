import express from "express";

const bookRouter = express.Router();

import * as bookController from "../controllers/book-controller.js";
import { authenticateJWT } from "../middleware/auth-middleware.js";

// Get All Books
bookRouter.get("/", bookController.getAllBooksController);

// Review Book
bookRouter.post("/review/:bookId", bookController.reviewBookController);

export default bookRouter;
