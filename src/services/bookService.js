import Book from '../models/book.js';

class BookService {
    constructor() {
        this.books = [];
    }

    getAllBooks() {
        return this.books;
    }

    getBookById(id) {
        return this.books.find(b => b.id === parseInt(id));
    }

    createBook(title, author, year) {
        const newBook = new Book(this.books.length + 1, title, author, year);
        this.books.push(newBook);

        return newBook;
    }

    updateBook(id, title, author, year) {
        const book = this.getBookById(id);

        if (book) {
            book.title = title;
            book.author = author;
            book.year = year;

            return book;
        }

        return null;
    }

    deleteBook(id) {
        const bookIndex = id - 1;

        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);

            return true;
        }

        return false;
    }
}

export default new BookService();