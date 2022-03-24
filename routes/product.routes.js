const productController = require("../controller/product.controller")
const router = require("express").Router()
router.post("/addproduct", productController.addproduct)
router.delete("/deleteproduct/:id", productController.deleteproduct)
router.patch("/editproduct/:id", productController.editproduct)
router.get("/showallproduct", productController.showALLproduct)
router.get("/showsingleproduct/:id", productController.showproduct)




module.exports = router