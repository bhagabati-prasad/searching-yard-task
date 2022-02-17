const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model('product', ProductSchema);
