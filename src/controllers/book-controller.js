import * as bookService from "../services/book-service.js";

export const getAllBooksController = async (req, res) => {
  try {
    const { title, language, price, age,author } = req.query;
    const allBooks = await bookService.getAllBooks({
      title,
      language,
      price,
      age,
      author,
    });

    res.status(200).json(allBooks);
  } catch (error) {
    console.error("Could not get all books", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const reviewBookController = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const review = req.body.review;
    const result = await bookService.addReview(bookId, review);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
