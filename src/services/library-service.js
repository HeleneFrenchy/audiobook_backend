export const createLibrary = async (libraryName) => {
  const newLibrary = await LibraryModel.create({ libraryName });
  return newLibrary;
};

export const getAllBooks = async (libraryId) => {
  const library = await LibraryModel.findById(libraryId);
  return LibraryModel.books;
};

export const addBookToLibrary = async (libraryId, bookId) => {
  await LibraryModel.updateOne(
    { _id: libraryId },
    { $addToSet: { books: bookId } }
  );
  return true;
};

export const deleteBookFromLibrary = async (libraryId, bookId) => {
  await LibraryModel.updateOne(
    { _id: libraryId },
    { $pull: { books: bookId } }
  );
  return true;
};

// export const reviewBook = async (libraryId, bookId, rating, comment) => {};
