const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dimensions:{
    type: Object,
  },
  currency: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  bestseller: {
    type: Boolean,
  },
  featured: {
    type: Boolean
  },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
