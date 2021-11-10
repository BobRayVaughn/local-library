function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((total, book) => {
    if (!book.borrows[0].returned) total++; 
    return total;
  }, 0);
}

function getMostCommonGenres(books) {
  const results = books.reduce((acc, book) => {
    const genre = book.genre;
    const info = acc.find((item) => item.name === genre);
    if (!info) {const newGenre = {name: genre, count: 1,}; acc.push(newGenre);
    } else {info.count++;}
    return acc;}, []);
  results.sort((genreOne, genreTwo) => genreTwo.count - genreOne.count);
  results.splice(5);
  return results
}

function getMostPopularBooks(books) {
    return books
     .map((book) => {return { name: book.title, count: book.borrows.length };})
     .sort((bookOne, bookTwo) => (bookOne.count < bookTwo.count ? 1 : -1))
     .slice(0, 5);
   }

function getMostPopularAuthors(books, authors) {
    let results = [];
    authors.forEach((author) => {
     let writer = {
      name: `${author.name.first} ${author.name.last}`, count: 0 };
     books.forEach((book) => {
      if (book.authorId === author.id) {writer.count += book.borrows.length;}});
     results.push(writer);
    });
    return results.sort((authorOne, authorTwo) => authorTwo.count - authorOne.count).slice(0, 5);
   }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
