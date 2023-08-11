// lib.js
let myLibrary = [];
function Book(){
   
}
function addBookToLibrary(title,pages,read,author){
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.author = author;
}
document.addEventListener("DOMContentLoaded", function() {
    let newBookButton = document.getElementById("new-book-button");
  
    newBookButton.addEventListener("click", function() {
      let newBookForm = document.getElementById("new-book-form");
      newBookForm.style.display = "block"; 
    });
  });
  