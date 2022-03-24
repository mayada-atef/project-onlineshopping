// require("dotenv").config()
// const express = require("express")
// const app = express()
// app.get(("/"),(req,res)=>{res.send("test")})
// module.exports = app
const path=require("path")
require('dotenv').config()
require("../db/connection")
const express = require("express")
const app = express()
app.use(express.json())
const userRoutes = require("../routes/user.routes")
const productRoutes = require("../routes/product.routes")
const orderRoutes = require("../routes/order.routes")

const staticfiles = path.join("../uploads")
app.use(express.static(staticfiles))
app.use("/user", userRoutes)
app.use("/product", productRoutes)
app.use("/order",orderRoutes)


app.get('*', (req,res)=> res.status(404).send({ 
    apiStatus: false, 
    message: "incorrect route" 
}))
module.exports = app