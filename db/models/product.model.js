const mongoose = require("mongoose")
const productscheme = new mongoose.Schema({
    name: {
        type: String,
         required:true
        
    },
    rate: {
        type:Number
    },
    productimg: {
        type:String
    },
    details: {
        type:String
    },
    price: {
        type: Number,
         required:true
    },
    avalaibe: {
        type: Boolean
    },
    description: {
        type:String
    }
    ,
    specification: [{
        model: { type: String},
        color: { type: String},
        material:{ type: String}
        
    }]
       
     
     
}, { timestamps: true })
const product = mongoose.model("product", productscheme)
module.exports=product