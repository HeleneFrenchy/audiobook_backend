import libraryService from "../services/libraryService";

export const createLibraryController = async (req, res) => {
  try {
    const { libraryName } = req.body;
    const library = await libraryService.createLibrary(libraryName);
    res.status(200).json({ message: "Library created successfully", library });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

 export const getAllBooksController = async (req, res) => {
   try {
     const books = await libraryService.getAllBooks(req.user.libraryId);
     res.status(200).json({ books });
   } catch (error) {
     res.status(500).json({ error: "Internal server error" });
   }
 };

export const addBookToLibraryController = async (req, res) => {
  try {
    const { bookId } = req.params;
    await libraryService.addBookToLibrary(req.user.libraryId, bookId);
    res.status(200).json({ message: "Book added to library successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

 export const deleteBookFromLibraryController = async (req, res) => {
   try {
     const { bookId } = req.params;
     await libraryService.deleteBookFromLibrary(req.user.libraryId, bookId);
     res
       .status(200)
       .json({ message: "Book deleted from library successfully" });
   } catch (error) {
     res.status(500).json({ error: "Internal server error" });
   }
 };

// export const reviewBookController = async (req, res) => {
// };

