let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = index;
    bookCard.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <button class="toggle-read-btn">${book.read ? 'Mark Unread' : 'Mark Read'}</button>
      <button class="remove-book-btn">Remove</button>
    `;
    bookList.appendChild(bookCard);
  });

  addEventListenersToBooks();
}

function addEventListenersToBooks() {
  const toggleReadButtons = document.querySelectorAll('.toggle-read-btn');
  const removeBookButtons = document.querySelectorAll('.remove-book-btn');

  toggleReadButtons.forEach((button) => {
    button.addEventListener('click', toggleReadStatus);
  });

  removeBookButtons.forEach((button) => {
    button.addEventListener('click', removeBook);
  });
}

function toggleReadStatus(event) {
  const bookIndex = event.target.parentNode.dataset.index;
  myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
  displayBooks();
}

function removeBook(event) {
  const bookIndex = event.target.parentNode.dataset.index;
  myLibrary.splice(bookIndex, 1);
  displayBooks();
}

const addBookBtn = document.getElementById('add-book-btn');
const addBookForm = document.getElementById('add-book-form');
const bookForm = document.getElementById('book-form');

addBookBtn.addEventListener('click', () => {
  addBookForm.classList.toggle('hidden');
});

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = parseInt(document.getElementById('pages').value);
  const read = document.getElementById('read').checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();
  bookForm.reset();
  addBookForm.classList.add('hidden');;
});

// Example: manually adding some books to the library
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 336, false);
addBookToLibrary("1984", "George Orwell", 328, true);

displayBooks();
