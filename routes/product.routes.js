const productController = require("../controller/product.controller")
const router = require("express").Router()
// const auth = require("../middleware/auth")
const authAdmin=require("../middleware/authAdmin")
router.post("/addproduct",authAdmin,productController.addproduct)
router.delete("/deleteproduct/:id",authAdmin, productController.deleteproduct)
router.patch("/editproduct/:id",authAdmin, productController.editproduct)
router.get("/showallproduct",authAdmin, productController.showALLproduct)
router.get("/showsingleproduct/:id",authAdmin,productController.showproduct)




module.exports = router