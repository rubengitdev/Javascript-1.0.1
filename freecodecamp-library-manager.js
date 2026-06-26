// Create a variable called library and assign it an empty array
// Inside the library array, create an object with the properties and values
// Create another object inside the libary array with the properties and values
// Log the message "Books in the Library:\n"
// Create a function called getBookInformation with one parameter of array called catalog
// Inside function getBookInformation use the map() method on the catalog parameter to return a new array of just book titles.
// Below your getBookInformation function, add a console.log and pass in a getBookInformation() function call with library for the argument.
// Update your use of the map() method to instead return an array of strings in this format: TITLE by AUTHOR
// Chain the join() method with a \n for the separator to the map().
// Log the message "\nList of book summaries:\n" to the console.
// Create a getBookSummaries function with a single parameter, accepting an array with book objects.
// Chain the join() method to your existing map() method and pass in "\n" for the separator.
// Below getBookSummaries function, add a log that should call the getBookSummaries function with library for the argument.
// Display a list of books by author: log the message "\nList of books by Arvid Kah:\n".
// Create a getBooksByAuthor function with two parameters array with book objects and string with the author.
// Log the getBooksByAuthor function with library and "Arvid Kahl" for arguments.
// Log the message "\nList of books by James Clear:\n"
// Log the getBooksByAuthor function with library and "James Clear" arguments.
// Log the message "\nTotal number of pages for all library books:\n".
// Create getTotalPages function with a single parameter of array returning the total number of pages.
// Log the getTotalPages function.

const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
  {
    title:
      "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    author: "Patrick Bet-David",
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "A book focusing on how to build an audience-driven business",
    pages: 308,
  },
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    author: "Jon Gordon",
    about: "A book about effective ways to lead a coffee bean lifestyle",
    pages: 256,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    author: "Jeff DeGraff and Staney DeGraff",
    about: "A book on how to develop creativity and  innovation skills",
    pages: 168,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    about:
      "A book about financial literacy, financial independence, and building wealth. ",
    pages: 336,
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "A book on how to bootstrap a business",
    pages: 500,
  },
];

console.log("Books in the Library:\n");

function getBookInformation(catalog) {
  return catalog.map((book) => `${book.title} by ${book.author}`).join("\n");
}

console.log(getBookInformation(library));
console.log("\nList of book summaries:\n");

function getBookSummaries(books) {
  return books.map((book) => `${book.about}`).join("\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor(arrBook, strAuthor) {
  const booksByAuthor = arrBook.filter((book) => book.author === strAuthor);
  return booksByAuthor;
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));
console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

function getTotalPages(books) {
  const totalPage = books.reduce((acc, curr) => acc + curr.pages, 0);
  return totalPage;
}
console.log("\nTotal number of pages for all library books:\n");
console.log(getTotalPages(library));
