const productSchema = require("../models/product");

// Get all products from db
const getProducts = async (req, res) => {
  try {
    const products = await productSchema.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Error occurred in the server"});
  }
};

module.exports = {
    getProducts,
}
