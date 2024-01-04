const Order = require('../models/orderModel');

// Create a new order for a  user
exports.createOrder = async (req, res) => {
  const { userId, totalAmount } = req.body;
  try {
    const order = await Order.create({ userId, totalAmount });
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieve all orders specific user
exports.getAllOrdersForUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.find({ userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieve a single order by its ID
exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an order total amount by its ID
exports.updateOrderAmountById = async (req, res) => {
  const orderId = req.params.id;
  const { totalAmount } = req.body;
  try {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, { totalAmount }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an order by its ID
exports.deleteOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
