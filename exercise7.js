/*7. Book and Ebook Classes with Price

Write a JavaScript program that creates a class `Book` with properties 
for title, author, and publication year. Include a method to display book
details. Create a subclass called 'Ebook' that inherits from the 'Book' 
class and includes an additional property for book price. Override the display 
method to include the book price. Create an instance of the 'Ebook' class and display its details.*/
class Book{
    title;
    author;
    publicationYear;
    constructor(title, author, publicationYear){
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    bookDetails(){
        return `details book: title: ${this.title}. author: ${this.author}. ${this.publicationYear}`
    }
}