const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },    
    anio: {
        type: Number,
        required: true
    },
    edicion: {
        type: Number,
        required: true
    },
     
});

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;