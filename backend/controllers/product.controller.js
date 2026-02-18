const Product = require('../models/product.model')

const addProduct = async (req,res)=>{
    const data = req.body
    console.log(data)
    const newProduct = await new Product(data).save()
    try {
        res.status(200).json({
            success: true,
            data: newProduct,
            message: "Add product success!!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllProduct = async (req,res)=>{
    const data = req.body
    console.log(data)
    const allProduct = await Product.find()
    try {
        res.status(200).json({
            success: true,
            data: allProduct,
            message: "Product are found!!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getOneProduct = async (req,res)=>{
    const { id } = req.params
    console.log(id)
    
    const oneProduct = await Product.findById(id)
    try {
        res.status(200).json({
            success: true,
            data: oneProduct,
            message: `Product id ${id} have found!`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const updateProduct = async (req,res)=>{
    try {
        const { id } = req.params

        const updatPro = await Product.findByIdAndUpdate(id, req.body,{
            new: true,
            runValidators: true
        })
        if(!updatPro){
            res.status(400).json({
                success: false,
                message: `Product id ${id} not found!`
            })
        }
        res.status(200).json({
            success: true,
            data: updatPro,
            message: `Product id ${id} update success!`
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const removeProduct = async (req,res)=>{
    const { id } = req.params;
    console.log(id)

    const deleteProduct = await Product.findByIdAndDelete(id)
    try {
        res.status(200).json({
            success: true,
            data: deleteProduct,
            message: `Product id ${id} delete success!`
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = {
                addProduct,
                getAllProduct,
                getOneProduct,
                updateProduct,
                removeProduct
            }