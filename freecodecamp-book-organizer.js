const books = [
  {
    title: "Harry Potter and the Goblet of Fire",
    authorName: "Ruben",
    releaseYear: 1992,
  },
  {
    title: "Don't Let Everything Affects You",
    authorName: "Thomas Shelby",
    releaseYear: 1998,
  },
  {
    title: "Atomic Bullshit",
    authorName: "James Unclear",
    releaseYear: 1940,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  }

  if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter((book) => {
  return book.releaseYear <= 1950;
});

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
