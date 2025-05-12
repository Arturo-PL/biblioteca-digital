const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

module.exports = connectDB;
