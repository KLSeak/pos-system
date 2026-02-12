const mongoose = require('mongoose')
require('dotenv').config()
const dbconnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database Connected!!')
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = dbconnection;
