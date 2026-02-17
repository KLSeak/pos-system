const express = require('express')
const productRouter = express.Router()
const {addProduct, getAllProduct,getOneProduct} = require('../controllers/product.controller')
const { getOneCategory } = require('../controllers/category.controller')

productRouter.route('/')
    .post(addProduct)
    .get(getAllProduct)

productRouter.route('/:id')
    .get(getOneProduct)



module.exports = productRouter;