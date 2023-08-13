// lib.js
let myLibrary = [];

function Book(title,pages,read,author){
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.author = author;
}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let nwBook = new Book(title, author, pages, read);
    console.log(nwBook);

}

document.addEventListener("DOMContentLoaded", function() {
    let newBookButton = document.getElementById("new-book-button");
  
    newBookButton.addEventListener("click", function() {
      let newBookForm = document.getElementById("new-book-form");
      newBookForm.style.display = "block"; 
    });
  });

document.querySelector("#new-book-form").addEventListener("submit", function{
  event.preventDefault();
  addBookToLibrary()
})