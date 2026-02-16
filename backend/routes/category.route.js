const express = require('express')
const categoryRouter = express.Router()
const {
    addCategory, 
    getAllCategory,
    getOneCategory,
    updateCategory,
    removeCategory} = require('../controllers/category.controller')


categoryRouter.route('/')
    .post(addCategory)
    .get(getAllCategory)

categoryRouter.route('/:id')
    .get(getOneCategory)
    .patch(updateCategory)
    .delete(removeCategory)

module.exports = categoryRouter;