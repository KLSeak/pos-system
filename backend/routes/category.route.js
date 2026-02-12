const express = require('express')
const addCategory = require('../controllers/category.controller')
const categoryRouter = express.Router()

categoryRouter.route('/')
    .post(addCategory)


module.exports = categoryRouter;