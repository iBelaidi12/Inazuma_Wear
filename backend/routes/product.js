//This file is to register the diff routes
const express = require('express')
const {
    getProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
    updateProduct,
} = require('../controllers/ProductController')


//Create an instance of the router
const router = express.Router()

//Adding req handler on that Router
//Fullpath = 1st argument in app.use + 1st one here

//GET all products
router.get('/', getProducts)

//GET a single product
router.get('/:id', getOneProduct)

//POST a new workout
router.post('/', addProduct)

//DELETE a product
router.delete('/:id', deleteProduct)

//UPDATE a product
router.patch('/:id', updateProduct)

//Exporting the router
module.exports = router


//En résumé, les routes dirigent les requêtes HTTP vers les controllers appropriés, qui contiennent 
//la logique nécessaire pour traiter ces requêtes