const express = require('express');
const router = express.Router();


const actions = require('../actions/productActions.js');

router.get('/products',actions.fetchProducts);
router.get('/products/:title',actions.fetchProduct)


module.exports = router;