const productController = require("../controller/product.controller")
const router = require("express").Router()
const upload=require("../middleware/fileUpload")
// const auth = require("../middleware/auth")
const authAdmin=require("../middleware/authAdmin")
router.post("/addproduct",authAdmin,upload.single('product'),productController.addproduct)
router.delete("/deleteproduct/:id",authAdmin, productController.deleteproduct)
router.patch("/editproduct/:id", authAdmin, productController.editproduct)
// router.get("/showallproduct",authAdmin, productController.showALLproduct)
// router.get("/showsingleproduct/:id", authAdmin, productController.showproduct)
router.get("/showallproduct", productController.showALLproduct)
router.get("/showsingleproduct/:id", productController.showproduct)
router.get("/categoryproducts/:categoryId", productController.showCategoryProdcuts)
router.post("/productImg", authAdmin, upload.single('product'),productController.productImg)





module.exports = router