const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/orders', orderController.createOrder);
router.get('/orders/user/:userId', orderController.getAllOrdersForUser);
router.get('/orders/:id', orderController.getOrderById);
router.put('/orders/:id', orderController.updateOrderAmountById);
router.delete('/orders/:id', orderController.deleteOrderById);

module.exports = router;

