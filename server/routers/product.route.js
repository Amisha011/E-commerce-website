const express=require("express");
const productController=require("../controllers/product.controller");
const auth = require('../middlewares/auth');

//create router
const router=express.Router();

//controllers
router.post(`/addProduct`,auth,productController.addProduct);
router.get(`/getAllProducts`,productController.getAllProducts);
router.put(`/updateProduct/:id`,auth,productController.updateProduct);
router.delete(`/deleteProduct/:id`,auth,productController.deleteProduct);

module.exports=router;