const Category = require('../models/category.models')

const addCategory = async (req,res) =>{
    const data = req.body;
    console.log(data)

    const newCategory = await new Category(data).save();
    try {
        res.status(200).json({
            success: true,
            data: newCategory,
            message: "add category success!!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllCategory = async (req,res)=>{
    const data = req.body;
    console.log(data)

    const allCategory = await Category.find();
    try {
        res.status(200).json({
            success: true ,
            message: "Category are found!"
        })
    } catch (error) {
        res.status(500).json({
            success: false ,
            message: error.message
        })
    }
}



module.exports = 
                { addCategory,
                getAllCategory

};