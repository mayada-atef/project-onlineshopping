const { findOneAndDelete, findOneAndUpdate } = require("../db/models/cart.model")
const cartModel = require("../db/models/cart.model")
class Cart {
    static addtoCart = async (req, res) => {
        // try {
        //     const productId = req.params.productId
        //     console.log(productId)
        //         const cart = new cartModel({
        //             userId: req.user._id, // , ...req.body
        //         })
        //     // cart.products["productId"] = productId
        //     cart.products ={ "productId": req.params.productId }
        //     await cart.save()
        //     // cart.products["productId"].push(productId)
           
        //     res.status(200).send({
        //         apiStatus: true,
        //         data:cart,
                
        //         message: "added to cart"
        //     })
        // }
        // catch (e) {
        //     res.status(500).send({
        //         apiStatus: false,
        //         errors: e.message,
        //         message: "error in add to cart"
        //     })
        // }
        /********************************************************************************
         * ***************************************  */
        // try {
        //     const productId = req.params.productId
        //     console.log(productId)
        //     const findcart = cartModel.findOne({ userId: req.user._id })
        //     if (findcart) {
        //         console.log(findcart)
        //         console.log("test finded cart")
        //         // findcart.products = findcart.products.push({ "productId": productId })
        //         findcart.products=findcart.products+({ "productId": productId })
        //         // await findcart.save()
        //     }
        //     else {
        //         const cart = new cartModel({userId: req.user._id})
        //           console.log("test  cart")
        //         cart.products += { "productId": productId }
        //           // cart.products.push({"productId": req.params.productId })
        //          await cart.save()
        //     }   
        //     res.status(200).send({
        //         apiStatus: true,
        //         message: "added to cart"
        //     })
        // }
        // catch (e) {
        //     res.status(500).send({
        //         apiStatus: false,
        //         errors: e.message,
        //         message: "error in add to cart"
        //     })
        // }
          /********************************************************************************
         * ***************************************  */
        try {
            const productId = req.params.productId
            await req.user.populate("pDetails")
            // const productdata = req.user.pDetails
            // console.log(productdata)
            const findcart = cartModel.findOne({ userId: req.user._id })
            if (findcart) {
                console.log(findcart)
                console.log("test finded cart")
                const isexist = findcart.products.findIndex(product=> product.productId===productId);
                if(isexist>=0) findcart.products["quantity"]++
                //findcart.products.push({ "productId": productId })
                findcart.products = findcart.products + ({ "productId": productId })
                findcart.totalPrice=findcart.totalPrice+ req.user.pDetails.price
                // await findcart.save()
            }
            else {
                const cart = new cartModel({userId: req.user._id})
                  console.log("test  cart")
                cart.products += { "productId": productId }
                   findcart.totalPrice=req.user.pDetails.price
                  // cart.products.push({"productId": req.params.productId })
                 await cart.save()
            }   
            res.status(200).send({
                apiStatus: true,
                message: "added to cart"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in add to cart"
            })
        }
    }
    
    static myCart = async (req, res) => {
        try {
            const cart = await cartModel.findOne({ userId: req.user._id })
            res.status(200).send({
                apiStatus: true,
                data: cart,
                message: "show allProducts in cart"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in showing allProducts in cart"
            })
        }
    }

    static delfromCart = async (req, res) => {
        const productId = req.params.productId
         await req.user.populate("pDetails")
        try {
            const cart = cartModel.findOne({ userId: req.user._id })
            // products=> _id,productId,quantity 3wza a delete el product kolo msh prod
            await cart.products.findOneAndDelete({ productId: productId })
            cart.products.totalPrice=cart.products.totalPrice-req.user.pDetails.price
             await cart.save()
            res.status(200).send({
                apiStatus: true,
                message: "cart deleted"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in deleting"
            })
        }
    }

    // static updateCart = async (req, res) => {
    //     try {
    //         const editCart = await cartModel.findByIdAndUpdate(
    //             req.params.id, { $set: req.body }, { runValidators: true }
    //         )
    //         res.status(200).send({
    //             apiStatus: true,
    //             data: editCart,
    //             message: "cart updated"
    //         })
    //     }
    //     catch (e) {
    //         res.status(500).send({
    //             apiStatus: false,
    //             errors: e.message,
    //             message: "error in updating"
    //         })
    //     }
    // }
    // static totalPrice = async(req,res)=>{
    //     try{
    //
    //         res.status(200).send({
    //             apiStatus:true,
    //             data:price,
    //             message:"total price "
    //         })
    //     }
    //     catch(e){
    //         res.status(500).send({
    //             apiStatus:false,
    //             errors:e.message,
    //             message:"error in total price"
    //         })
    //     }

    // }

}

module.exports = Cart