const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: 
  { type: String, 
    unique: true 
},
  email: { 
    type: String,
     unique: true 
    },
    orders: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Order'
     }],
  createdAt: { 
    type: Date, 
    default: Date.now 
},
  updatedAt: { 
    type: Date, 
    default: Date.now
 },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
