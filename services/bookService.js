const Book = require('../models/book');

const bookService = {

    getAllBooks: async () => {
        try {
            const data = await Book.find();
            return data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    getBookByID: async (id) => {
        try {
            const data = await Book.findById(id);
            return data;
        } catch (error) {
            console.log(error);
            return error;            
        }
    },

    getByAnio: async (anio) => {
        try {
            const data = await Book.find({anio});
            return data;
        } catch (error) {
            console.log(error);
            return error;            
        }
    },

    getByEdicion: async (edicion) => {
        try {
            const data = await Book.find({edicion});
            return data;
        } catch (error) {
            console.log(error);
            return error;            
        }
    },    

    addBook: async (book) => {
        try {
            const newBook = new Book(book);
            const data = await newBook.save();
            return data;
        } catch (error) {
            console.log(error);
            return error;            
        }
    },    

    updateBook: async (id,book) => {
        try {
            const data = await Book.findByIdAndUpdate(id, book, { new: true });
            return data;
        } catch (error) {
            console.log(error);
            return error;            
        }
    },  

    deleteBook: async (id) => {
        try {
            const data = await Book.findByIdAndDelete(id);
            return data;
        } catch (error) {
            console.log(error);
            return error;            
        }
    },       
};

module.exports = bookService;