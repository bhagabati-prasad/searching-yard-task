const { Router } = require('express');
const { productController } = require('../controllers');
const router = Router();

// @route GET: /api/products
router.get('/products', productController);

module.exports = router;
