const orderController = require("../controller/order.controller")
const router = require("express").Router()
router.post("/create",orderController.create)
router.delete("/delete/:id", orderController.delete)
router.patch("/edit/:id", orderController.edit)
router.get("/showall", orderController.showAllOrders)
router.get("/showuserorder/:userId", orderController.showUserOrder)


//add verifyToken
// edit*********verifyTokenAndAdmin
//delete******verifyTokenAndAdmin 
// user ****verifyTokenAndAuthorization
//all **** verifyTokenAndAdmin

module.exports = router