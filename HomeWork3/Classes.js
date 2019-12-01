var counterForConsole = 0;
var counterForHtml = 1;
var books = [];

function addBookOnPage(books) {
    var resultDiv = document.createElement("div");
    resultDiv.className = "container-fluid";
    books.map(function(nthBook) {
        resultDiv.appendChild(parseBookToRow(nthBook));
    });
    var container = document.getElementById("books").parentElement;
    container.replaceChild(resultDiv, document.getElementById("books"));
    resultDiv.id = "books";
    console.log("success add");
}

function parseBookToRow(Book) {
    var row = document.createElement("div");
    row.className = "row";

    id = document.createElement("div");
    id.className = "col-4";
    id.innerText = counterForHtml;
    row.appendChild(id);

    author = document.createElement("div");
    author.className = "col-4";
    author.innerText = Book.getAuthor();
    row.appendChild(author);

    title = document.createElement("div");
    title.className = "col-4";
    title.innerText = Book.getTitle();
    row.appendChild(title);

    counterForHtml++;
    return row;
}

function Book(title, author) {
    this.title = title;
    this.author = author;
    this.getAuthor = function() {
        return this.author;
    };
    this.setAuthor = function(newAuthor) {
        this.author = newAuthor;
    };
    this.getTitle = function() {
        return this.title;
    };
    this.setTitle = function(newTitle) {
        this.title = newTitle;
    };
}

Book.prototype.getInfoAboutBook = function() {
    return (
        counterForConsole++ +
        ". " +
        "Book: " +
        this.getTitle() +
        "\n" +
        "   Author: " +
        this.getAuthor()
    );
};

function AudioBook(publisher, title, author) {
    Book.call(this, title, author);
    this.publisher = publisher;
    this.getPublisher = function() {
        return this.publisher;
    };
    this.setPublisher = function(newPublisher) {
        this.publisher = newPublisher;
    };
}

AudioBook.prototype = Object.create(Book.prototype);

AudioBook.prototype.getInfoAboutBook = function() {
    return (
        Book.prototype.getInfoAboutBook.call(this) +
        "\n" +
        "   Publisher: " +
        this.getPublisher()
    );
};

function TextBook(numberOfPages, title, author) {
    Book.call(this, title, author);
    this.numberOfPages = numberOfPages;
    this.getNumberOfPages = function() {
        return this.numberOfPages;
    };
    this.setNumberOfPages = function(newNumberOfPages) {
        this.numberOfPages = newNumberOfPages;
    };
}

TextBook.prototype = Object.create(Book.prototype);

TextBook.prototype.getInfoAboutBook = function() {
    return (
        Book.prototype.getInfoAboutBook.call(this) +
        "\n" +
        "   Number Of Pages: " +
        this.getNumberOfPages()
    );
};

var book = new Book("Таинственная история Билли Миллигана", "Дэниел Киз");
console.log(book.getInfoAboutBook());
books.push(book);

var book1 = new Book("Лох", "А.Ю. Велесевич");
console.log(book1.getInfoAboutBook());
books.push(book1);

var audioBook = new AudioBook("Климов", "Aнна Каренина", "Л.В. Толстой");
console.log(audioBook.getInfoAboutBook());
books.push(audioBook);

var textBook = new TextBook("637", "Три Товарища", "Э.М. Ремарк");
console.log(textBook.getInfoAboutBook());
books.push(textBook);

console.log(books);
addBookOnPage(books);
