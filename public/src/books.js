function findAuthorById(authors, id) {
  let foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  return [booksDue(books), booksAvail(books)];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account};
  })
  .slice(0, 10);
}

//helper

const booksDue = (books) => {
  return books.filter((book) => book.borrows.some((record) => !record.returned));};

const booksAvail = (books) => {
  return books.filter((book) => book.borrows.every((record) => record.returned));};


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
