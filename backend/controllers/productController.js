//This file stores the functions that'll the job needed

//Import product Modal
const Product = require('../models/ProductModel.js')
const mongoose = require('mongoose')


//Get all the products
const getProducts = async (req, res) => {
    const products = await Product.find({}).sort({createdAt: -1})

    return res.status(200).json(products)
}

//Get a single product
const getOneProduct = async (req, res) => {
    //get the id from the url
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such product'})
    }

    const product = await Product.findById(id)
    if(!product){
        return res.status(400).json({error: 'No such product'})
    }

    res.status(200).json(product)
}

//Create a new product
const addProduct = async (req, res) => {
    const {title, type, color, size, price, sale, stock} = req.body

    //Add to the db
    try {
        const product = await Product.create({title, type, color, size, price, sale, stock})
        res.status(200).json(product)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getProducts,
    getOneProduct,
    addProduct,
}