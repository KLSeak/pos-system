const fs = require('fs')
const path = require('path')


const removefile = (req,res) =>{
    try {

        if(!req.body){
            res.status(400).json({
                success: false,
                message: "image is required!"
            })
        }
        const image = req.body.file
        const imagePath = path.join(__dirname, "../upload", image);
        
        if(fs.existsSync(imagePath)){ 
            fs.unlinkSync(imagePath) 
            return res.status(200).json({ 
                success: true, 
                message: "Image deleted successfully!" 
            }) 
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = removefile