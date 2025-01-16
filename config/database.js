const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/Ecommerce", { family: 4 }).then(() => {
        console.log("Mongodb connected with server");
    }).catch(err => {
        console.error("MongoDB connection error:", err);
    });
}

module.exports = connectDatabase;
