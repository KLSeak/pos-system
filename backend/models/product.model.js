const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "product is require!"],
        unique: true
    },
    id_category:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'cate is require!'],
        ref: 'Category'
    },
    code:{
        type: String,
        required: true,
        unique: true
    },
    image_url:{
        type: String
    },
    cost_price:{
        type: Number,
        required: true,
        min: 0
    },
    sale_price: {
        type: Number,
        required: true,
        min: 0
    },
    stock_qty:{
        type: Number,
        default: 0,
        min: 0
    },
    description:{
        type: String,
    }
},{timestamps: true})
const Product = mongoose.model('Product', productSchema)
module.exports = Product