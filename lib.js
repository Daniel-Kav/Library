// lib.js
let myLibrary = [];

function Book(title,pages,read,author){
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.author = author;
}

function render() {
  let libraryBook = document.getElementById("library");
  libraryBook.innerHTML = ''; // Clear the container before rendering

  for (let i = 0; i < myLibrary.length; i++) {
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `
      <p>Title: ${myLibrary[i].title}</p>
      <p>Author: ${myLibrary[i].author}</p>
      <p>Pages: ${myLibrary[i].pages}</p>
      <p>Read: ${myLibrary[i].read ? 'Yes' : 'No'}</p>
    `;
    libraryBook.appendChild(bookElement);
  }
}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let nwBook = new Book(title, pages, read, author);
    myLibrary.push(nwBook);
    render();

}

let newBookbtn = document.getElementById("new-book-button");
newBookbtn.addEventListener("click",function(){
  let newBookForm = document.getElementById("new-book-form");
  newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event){
  event.preventDefault();
  addBookToLibrary()
})