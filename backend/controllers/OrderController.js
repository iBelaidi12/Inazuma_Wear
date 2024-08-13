//This file stores the functions that'll the job needed

//Import order Modal
const Order = require('../models/OrderModel.js')
const mongoose = require('mongoose')


//Get all the orders
const getOrders = async (req, res) => {
    const orders = await Order.find({}).sort({createdAt: -1})

    return res.status(200).json(orders)
}

//Get a single order
const getOneOrder = async (req, res) => {
    //get the id from the url
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such order'})
    }

    const order = await Order.findById(id)
    if(!order){
        return res.status(400).json({error: 'No such order'})
    }

    res.status(200).json(order)
}

//create a new order
const addOrder = async (req, res) => {
    const {products, name_client, num_tel, wilaya, commune, total_price} = req.body

    let emptyFields = []
    if(!products){
        emptyFields.push('products')
    }
    if(!name_client){
        emptyFields.push('name_client')
    }
    if(!num_tel){
        emptyFields.push('num_tel')
    }
    if(!wilaya){
        emptyFields.push('wilaya')
    }
    if(!commune){
        emptyFields.push('commune')
    }
    if(total_price === null || total_price === undefined){
        emptyFields.push('total_price')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill all the fields', emptyFields})
    }

    //Add to the db
    try {
        const order = await Order.create({products, name_client, num_tel, wilaya, commune, total_price})
        res.status(200).json(order)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getOrders,
    getOneOrder,
    addOrder
}