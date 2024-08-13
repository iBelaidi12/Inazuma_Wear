const express = require("express")
const {
    getOrders,
    getOneOrder,
    addOrder,
    deleteOrder,
    updateOrder
} = require('../controllers/OrderController')

const router = express.Router()

//GET all orders
router.get('/', getOrders)

//GET one order
router.get('/:id', getOneOrder)

//POST one order
router.post('/', addOrder)

//DELETE one order
router.delete('/:id', deleteOrder)

//PATCH one order
router.patch('/:id', updateOrder)

module.exports = router