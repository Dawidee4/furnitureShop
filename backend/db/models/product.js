const mongoose = require('mongoose');
const Product = mongoose.model('Product',{
    title: String,
    description: String,
    image: String,
    price: Number
});

module.exports = Product;