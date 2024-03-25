export const getAllBooks = async () => {
  const books = await Book.find();
  return books;
};

export const getBooksByFilter = async (title, genre, age, language) => {
};

export const purchaseBook = async (userId, bookId) => {
};

export const createPublisherPage = async (publisherInfo) => {
};

export const addBooksToBookstore = async (bookId) => {
};

export const updateBooks = async (bookId, updatedInfo) => {

};

export const deleteBook = async (bookId) => {

};

export const getAnalytics = async () => {
 
};


