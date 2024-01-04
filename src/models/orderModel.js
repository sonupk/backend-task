const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'User' 
    },
  totalAmount: {
     type: Number 
    },
  createdAt: {
     type: Date,
      default: Date.now
     },
  updatedAt: { 
    type: Date, 
    default: Date.now
 },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
