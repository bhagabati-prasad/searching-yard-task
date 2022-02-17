const { Router } = require('express');
const { renderClient } = require('../controllers');
const router = Router();

// @route GET: /
router.get('/', renderClient);

module.exports = router;
