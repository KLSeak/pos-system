const express = require('express')
const uploadImage = require('../controllers/upload.controller')
const upload = require('../middleware/upload.middleware')
const removefile = require('../controllers/remove.controller')
const uploadRouter = express.Router()


uploadRouter.route('/')
    .post(upload.single('file'), uploadImage)
    .delete(removefile)


module.exports = uploadRouter
