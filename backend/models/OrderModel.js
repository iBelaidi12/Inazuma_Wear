const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderModel = new Schema({
    products: [
        {
            id_product: {
                type: Schema.Types.ObjectId,
                required: true
            },
            qte: {
                type: Number,
                min: 1,
                required: true,
            }
        }
    ],
    name_client: {
        type: String,
        required: true
    },
    num_tel: {
        type: String,
        max: 10,
        required: true
    },
    wilaya: {
        type: String,
        required: true
    },
    commune: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', orderModel)