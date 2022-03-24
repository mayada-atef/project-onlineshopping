const categoryController = require("../controller/category.controller")
const router = require("express").Router()
router.post("/create", categoryController.create)
router.delete("/delete/:id", categoryController.delete)
router.patch("/edit/:id", categoryController.edit)
router.get("/showall", categoryController.showAllcategories)

module.exports = router