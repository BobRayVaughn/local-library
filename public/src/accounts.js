function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id)
  return foundId
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountOne, accountTwo) => accountOne.name.last.toLowerCase() > accountTwo.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    if (book.borrows.find(book => book.id === account.id)) total++; return total;}, 0);                                 
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowed = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowed.push(book);}});});
  let results = borrowed.map((book) => {
    return {...book, author: writer(book, authors)};
  });
  return results;
}

//helper

function writer(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
