const express=require("express");
const userController=require("../controllers/user.api");
const auth=require("../middlewares/auth");
//create router
const router=express.Router();

router.post("/signUp",userController.signUp);
router.post("/login",userController.login);

module.exports=router;