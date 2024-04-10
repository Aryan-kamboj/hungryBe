const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  foodItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'dish'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model('order', orderSchema);
