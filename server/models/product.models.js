const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        minlength: [3, "Title must be at least 3 characters."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."],
        minlength: [3, "Price must include cents."]
    },
    desc: {
        type: String,
        required: [true, "Description is required."],
        minlength: [10, "Description must be at least 10 characters."]
    
    }
}, {timestamps: true})

module.exports = Product;