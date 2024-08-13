const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderModal = new Schema = ({
    product: [
        {
            id_product: {
                type: ObjectId,
                required: true
            },
            qte: {
                type: number,
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
        type: number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', orderModal)