const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
  itemName: String,
  price: Number,
  vegetarian: Boolean,
  image: String,
  restro: String,
  rating: Number,
  distance: Number
});

module.exports = mongoose.model('dish', dishSchema);
