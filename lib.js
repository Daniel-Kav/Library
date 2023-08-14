// lib.js
let myLibrary = [];

function Book(title,pages,read,author){
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.author = author;
}

function render(){
  let ulEl = document.getElementById("library");
  ulEl.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++){
    let liEl = document.createElement("li");
    liEl.textContent = myLibrary[i].title;
    liEl.textcontent = myLibrary[i].author;
    ulEl.appendChild(liEl);
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