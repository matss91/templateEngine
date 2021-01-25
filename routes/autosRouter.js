const express=require("express");
const router=express.Router();
const autosController=require("../controllers/autosControler")

router.get("/",autosController.index);
router.get("/show:id",autosController.show);

module.exports=router;