const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required:true
    },
    stock : {
        type: Number,
        default : 0
    },
    salePrice : {
        type : Number
    },
    onSale : {
        type : Boolean,
        default : false 
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;