const express = require("express")
const {
    getOrders,
    getOneOrder,
    addOrder
} = require('../controllers/OrderController')

const router = express.Router()

//GET all orders
router.get('/', getOrders)

//GET one order
router.get('/:id', getOneOrder)

//POST one order
router.post('/', addOrder)

module.exports = router