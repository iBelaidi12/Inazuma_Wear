const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sale: {
        type: Number,
        default: 0
    },
    stock : {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', productSchema)