const cartModel = require("../db/models/cart.model")
class Cart {
    static addCart = async (req, res) => {
        try {
            const cart = await cartModel.findOne({ userId: req.params.userId })
            res.status(200).send({
                apiStatus: true,
                data: cart,
                message: "added cart"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in add cart"
            })
        }
    }

    static showCart = async (req, res) => {
        try {
            const carts = await cartModel.find({})
            res.status(200).send({
                apiStatus: true,
                data: carts,
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

    static delCart = async (req, res) => {
        try {
            await cartModel.findByIdAndDelete(req.params.id)
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

    static updateCart = async (req, res) => {
        try {
            const editCart = await cartModel.findByIdAndUpdate(
                req.params.id, { $set: req.body }, { runValidators: true }
            )
            res.status(200).send({
                apiStatus: true,
                data: editCart,
                message: "cart updated"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in updating"
            })
        }
    }
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