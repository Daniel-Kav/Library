function lib(title,author,numberOfPages,isRead){
    this.title = title ;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? "read" : "not yet read"};
         `
    }
const thehobbit = new lib("The Hobbit","J.R Tolkien",295,false);

console.log(thehobbit.info());
console.log("working")