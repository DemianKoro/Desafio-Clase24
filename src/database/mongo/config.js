const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// const URL = process.env.DB_URL_MONGO;
const URL = 'mongodb+srv://Demian:HcD10zWhtNgHMQRz@cluster0.qmej3gi.mongodb.net/ecommerce?retryWrites=true&w=majority'


const dbConnection = () => {
    try {
        mongoose.connect(URL);
        console.log("Connected MongoDB")
    } catch (error) {
        console.log(error);
      throw new Error('Error');
    }
}

module.exports = {
  dbConnection,
};