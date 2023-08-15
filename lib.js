// lib.js
let myLibrary = [];

function Book(title,pages,read,author){
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.author = author;
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}
function toggleRead(index){
  myLibrary[index].toggleRead();
  render();
} 

function render() {
  let libraryBook = document.getElementById("library");
  libraryBook.innerHTML = ''; // Clear the container before rendering

  for (let i = 0; i < myLibrary.length; i++) {
    let bookElement = document.createElement("div");
    bookElement.innerHTML = `
    <div class="card-header">
      <h3>Title: ${myLibrary[i].title}</h3>
      <h5>Author: ${myLibrary[i].author}</h5>
    </div>
    <div class="card-body">
      <p>Pages: ${myLibrary[i].pages}</p>
      <p>Read: ${myLibrary[i].read ? 'Yes' : 'No'}</p>
      <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
      <button class = "toggle-btn" onclick="toggleRead(${i})">Read</button
    </div>
    `;
    libraryBook.appendChild(bookElement);
  }
}
function removeBook(index){
  myLibrary.splice(index,1);
  render();
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