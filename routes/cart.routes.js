const cartController = require("../controller/cart.controller")
const router = require("express").Router()
const auth = require("../middleware/auth")
//const authAdmin = require("../middleware/authAdmin")
router.post("/addtoCart/:productId",auth, cartController.addtoCart)
router.get("/myCart",auth, cartController.myCart)
router.delete("/delCart/:productId", auth, cartController.delCart)
// router.patch("/delfromCart",auth, cartController.delfromCart)
// router.patch("/increaseQ", auth, cartController.increaseQ)
// router.patch("/decreaseQ",auth, cartController.decreaseQ)
//router.get("/updateCart",auth, cartController.totalPrice)
router.get("/test", async (req, res) => {
    try {
            const carts = await cartModel.findOne({})
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
})
module.exports = router