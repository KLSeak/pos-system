const express = require('express')
const app = express()
const dbconnection = require('./config/db.js')
const categoryRouter = require('./routes/category.route.js')
require('dotenv').config()

//middleware
app.use(express.json())

app.use('/api/category', categoryRouter)

app.get('/', (req,res)=>{
    res.send("Home page")
})

dbconnection();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("server is running...")
    console.log(`http://localhost:${port}`)
})
