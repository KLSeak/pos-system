const express = require('express')
const {addCategory, getAllCategory} = require('../controllers/category.controller')
const categoryRouter = express.Router()

categoryRouter.route('/')
    .post(addCategory)
    .get(getAllCategory)


module.exports = categoryRouter;