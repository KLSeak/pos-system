const express = require('express')
const productRouter = express.Router()
const {addProduct, getAllProduct,getOneProduct,updateProduct,removeProduct} = require('../controllers/product.controller')

productRouter.route('/')
    .post(addProduct)
    .get(getAllProduct)

productRouter.route('/:id')
    .get(getOneProduct)
    .patch(updateProduct)
    .delete(removeProduct)



module.exports = productRouter;