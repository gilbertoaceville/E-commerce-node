const router = require('express').Router();
const { getProducts } = require('../controller/product');


// GET all products from db
//@route GET api/products
router.get('/', getProducts)

module.exports = router;
