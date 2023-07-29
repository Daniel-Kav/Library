function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "read" : "not read yet"}`;
    };
  }
  
// Create a Book object
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

// Call the info function and log the result
console.log(theHobbit.info()); // Output: "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
  