import * as userService from "../services/user-service.js";

export const getAllBooksUserController = async (req, res) => {
  try {
    const books = await userService.getAllBooksUser(req.user.userId);
    res.status(200).json(books || [ ]);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteBookFromLibraryController = async (req, res) => {
  try {
    const { bookId } = req.params;
    await userService.deleteBookFromLibrary(req.user.userId, bookId);
    res.status(200).json({ message: "Book deleted from library successfully" });
  } catch (error) {
    console.error("Could not remove book from user library", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserCartController = async (req, res) => {
  try {
    const cart = await userService.getCart(req.user.userId);
    res.status(200).json(cart);
  } catch (error) {
    console.error("Could not retrieve cart", error);

    res.status(500).send({ error: "Internal server error" });
  }
};

export const AddToCartBookController = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    await userService.addToCartBook(req.user.userId, bookId);
    res.status(200).json({ message: "Book added to cart" });
  } catch (error) {
    console.error("Could not add book to cart", error);

    res.status(500).send({ error: "Internal server error" });
  }
};

export const DeleteFromCartBookController = async (req, res) => {
  try {
    const bookId = req.params.bookId;
    await userService.deleteFromCartBook(req.user.userId, bookId);
    res.status(200).json({ message: "Book deleted from cart" });
  } catch (error) {
    console.error("Could not remove book from cart", error);

    res.status(500).send({ error: "Internal server error" });
  }
};

export const purchaseBookController = async (req, res) => {
  try {
    const cart = await userService.getCart(req.user.userId);
    await userService.addBooksToLibrary(req.user.userId, cart);
    await userService.clearCart(req.user.userId, cart);

    res.status(200).json({ message: "Books purchased successfully" });
  } catch (error) {
    console.error("Could not purchase books", error);

    res.status(500).send("Error purchasing book");
  }
};
