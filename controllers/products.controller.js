const Products = require('../models/product.model');

// @route GET: /api/products
module.exports = async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
