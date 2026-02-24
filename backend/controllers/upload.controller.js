// const multer = require('multer')
const uploadImg = (req,res)=>{
    try {
        console.log(req.file)
        if(!req.file){
            res.status(400).json({
                success: false,
                message: "Image is require.."
            })
        }
        res.status(200).json({
            success: true,
            message: "image upload success!"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = uploadImg;
