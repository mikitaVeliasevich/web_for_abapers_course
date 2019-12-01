let counterForConsole = 1;
let counterForHtml = 1;

function addBookOnPage(books) {
    let resultDiv = document.createElement("div");
    resultDiv.className = "container-fluid";
    books.map(function(nthBook) {
        resultDiv.appendChild(parseBookToRow(nthBook));
    });
    let container = document.getElementById("books").parentElement;
    container.replaceChild(resultDiv, document.getElementById("books"));
    resultDiv.id = "books";
}

function parseBookToRow(Book) {
    let row = document.createElement("div");
    row.className = "row";

    id = document.createElement("div");
    id.className = "col-4";
    id.innerText = counterForHtml;
    row.appendChild(id);

    author = document.createElement("div");
    author.className = "col-4";
    author.innerText = Book["author"];
    row.appendChild(author);

    title = document.createElement("div");
    title.className = "col-4";
    title.innerText = Book["title"];
    row.appendChild(title);

    counterForHtml++;
    return row;
}

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    get author() {
        return this._author;
    }
    get title() {
        return this._title;
    }
    set author(author) {
        this._author = author;
    }
    set title(title) {
        this._title = title;
    }

    getInfoAboutBook() {
        return (
            counterForConsole++ +
            ". " +
            "Book: " +
            this.title +
            "\n" +
            "   Author: " +
            this.author
        );
    }
}

class AudioBook extends Book {
    constructor(publisher, title, author) {
        super(title, author);
        this.publisher = publisher;
    }

    get publisher() {
        return this._publisher;
    }

    set publisher(publisher) {
        this._publisher = publisher;
    }

    getInfoAboutBook() {
        return (
            super.getInfoAboutBook() + "\n" + "   Publisher: " + this.publisher
        );
    }
}

class TextBook extends Book {
    constructor(numberOfPages, title, author) {
        super(title, author);
        this.numberOfPages = numberOfPages;
    }

    get numberOfPages() {
        return this._publisher;
    }

    set numberOfPages(numberOfPages) {
        this._numberOfPages = numberOfPages;
    }

    getInfoAboutBook() {
        return (
            super.getInfoAboutBook() +
            "\n" +
            "   Number Of Pages:: " +
            this.numberOfPages
        );
    }
}

let book = new Book("Таинственная история Билли Миллигана", "Дэниел Киз");
let _book = new Book("Аня Лох", "А.Ю. Велесевич");
let audioBook = new AudioBook("Климов", "Aнна Каренина", "Л.В. Толстой");
let textBook = new TextBook("637", "Три Товарища", "Э.М. Ремарк");

console.log(book.getInfoAboutBook());
console.log(_book.getInfoAboutBook());
console.log(audioBook.getInfoAboutBook());
console.log(textBook.getInfoAboutBook());

let books = [];
books.push(book, _book, audioBook, textBook);
addBookOnPage(books);
