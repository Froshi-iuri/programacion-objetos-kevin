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
        return `details book: title: ${this.title}. author: ${this.author}. publication year: ${this.publicationYear}`
    }
}

class Ebook extends Book{
    bookPrice;
    constructor(title, author, publicationYear, bookPrice){
        super(title, author, publicationYear);
        this.bookPrice = bookPrice;
    }

    bookDetails(){
        return `details book: title: ${this.title}. author: ${this.author}. publication year: ${this.publicationYear}.
        book price: ${this.bookPrice}`
    }
}

let book1 = new Ebook("El pricipito",  "Antoine de Saint-Exupéry", 1943, 34000);
console.log(Ebook.bookDetails());