// lib.js

document.addEventListener("DOMContentLoaded", function() {
    let newBookButton = document.getElementById("new-book-button");
  
    newBookButton.addEventListener("click", function() {
      let newBookForm = document.getElementById("new-book-form");
      newBookForm.style.display = "block"; 
    });
  });
  