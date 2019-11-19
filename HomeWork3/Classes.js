var counter = 0;
function addBookOnPage(obj) {
    var newBookParagraph = document.createElement("p");
    newBookParagraph.id = counter;
    newBookParagraph.innerHTML =
        counter + ". " + obj.getTitle() + ", " + obj.getAuthor();
    document.body.appendChild(newBookParagraph);
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
        counter++ +
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
addBookOnPage(book);

var audioBook = new AudioBook("Климов", "Aнаа Каренина", "Л.В. Толстой");
console.log(audioBook.getInfoAboutBook());
addBookOnPage(audioBook);

var textBook = new TextBook("637", "Три Товарища", "Э.М. Ремарк");
console.log(textBook.getInfoAboutBook());
addBookOnPage(textBook);
