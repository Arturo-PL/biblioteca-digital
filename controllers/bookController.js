const bookService = require('../services/bookService');

const bookController = {

    searchPage: (req, res) => {
        res.render('searchBooks');
    },

    getAllBooks: async (req, res) => {
        try {
            const data = await bookService.getAllBooks();
            res.render('viewAllBooks', { books: data });
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    getBookByID: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await bookService.getBookByID(id);
            res.render('viewBookId', { book: data });
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    getBookByYear: async (req, res) => {
        try {
            const { year } = req.params;
            const data = await bookService.getByAnio(year);
            res.render('viewAllBooks', { books: data });
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    getBooksByEdition: async (req, res) => {
        try {
            const { edition } = req.params;
            const data = await bookService.getByEdicion(edition);
            res.render('viewAllBooks', { books: data });
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    addBook: async (req, res) => {
        try {
            await bookService.addBook(req.body);
            const data = await bookService.getAllBooks();
            res.redirect('/books');
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    updateBook: async (req, res) => {
        try {
            const { id } = req.params;
            await bookService.updateBook(id, req.body);
            const data = await bookService.getAllBooks();
            res.redirect('/books');
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    deleteBook: async (req, res) => {
        try {
            await bookService.deleteBook(req.params.id);
            const data = await bookService.getAllBooks();
            res.redirect('/books');
        } catch (error) {
            return res.send({ msg: error });
        }
    },

    formAdd: (req, res) => {
            res.render('createBook');
    },

    formEdit: async (req, res) => {
        try {
            const book = await bookService.getBookByID(req.params.id);
            res.render('editBook', { book });
        } catch (error) {
            return res.send({ msg: error });
        }
    }
};

module.exports = bookController;
