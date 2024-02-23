class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.libraryBooks = [];
    this.borrowedBooks = [];
  }

  updateUI() {
    let booksList = document.getElementById("books");
    booksList.innerHTML = "";

    this.libraryBooks.forEach((book) => {
      let listItem = document.createElement("li");
      listItem.innerText = book.title + " by " + book.author;

      let borrowButton = document.createElement("button");
      borrowButton.textContent = "Borrow";

      borrowButton.addEventListener("click", () => {
        let index = this.libraryBooks.indexOf(book);
        this.borrowBook(index);
      });

      listItem.appendChild(borrowButton);
      booksList.appendChild(listItem);
    });

    let borrowedBooksList = document.getElementById("borrowedBooks");
    borrowedBooksList.innerHTML = "";

    this.borrowedBooks.forEach((book) => {
      let borrowedBookListItem = document.createElement("li");
      borrowedBookListItem.innerText = book.title + " by " + book.author;

      let returnBookButton = document.createElement("button");
      returnBookButton.textContent = "return book";

      returnBookButton.addEventListener("click", () => {
        let index = this.borrowedBooks.indexOf(book);
        this.returnBook(index);
      });

      borrowedBookListItem.appendChild(returnBookButton);
      borrowedBooksList.appendChild(borrowedBookListItem);
    });
  }

  addBook(book) {
    this.libraryBooks.push(book);
    this.updateUI();
  }

  borrowBook(index) {
    let bookToBorrow = this.libraryBooks[index];
    this.libraryBooks.splice(index, 1);
    this.borrowedBooks.push(bookToBorrow);
    this.updateUI();
  }

  returnBook(index) {
    let bookToReturn = this.borrowedBooks[index];
    this.borrowedBooks.splice(index, 1);
    this.libraryBooks.push(bookToReturn);
    this.updateUI();
  }
}

let library = new Library();

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
let book2 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);
