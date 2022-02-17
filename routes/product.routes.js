const { Router } = require('express');
const { productController } = require('../controllers');
const router = Router();

// @route GET: /api/product
router.get('/product', productController);

module.exports = router;
