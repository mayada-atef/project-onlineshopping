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

// productscheme.virtual("pDetails", {
//     ref: "Cart.products",
//     localField: "_id",
//     foreignField:"productId"
// })
productscheme.virtual("pDetails", {
    ref: "Cart",
    localField: "_id", //dh id bta3 meen?
    foreignField:"productId"
})
const product = mongoose.model("product", productscheme)
module.exports=product