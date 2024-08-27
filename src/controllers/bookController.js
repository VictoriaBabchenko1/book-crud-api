import bookService from '../services/bookService.js';

class BookController {
    getAllBooks(req, res) {
        try {
            const books = bookService.getAllBooks();
            res.json(books);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    getBookById(req, res) {
        try {
            const book = bookService.getBookById(req.params.id);

            if (book) {
                res.json(book);
            } else {
                res.status(404).send('Book not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    createBook(req, res) {
        try {
            const { title, author, year } = req.body;
            const newBook = bookService.createBook(title, author, year);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    updateBook(req, res) {
        try {
            const { title, author, year } = req.body;
            const updatedBook = bookService.updateBook(req.params.id, title, author, year);
            if (updatedBook) {
                res.json(updatedBook);
            } else {
                res.status(404).send('Book not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    deleteBook(req, res) {
        try {
            const isDeleted = bookService.deleteBook(req.params.id);
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).send('Book not found');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}

export default new BookController();