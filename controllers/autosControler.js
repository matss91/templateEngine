const autos=require("../data/autos");
module.exports={
index:(req,res)=>{
res.render("autos",{title:"listado de autos",autos})

},
show:(req,res)=>{
let id=req.params.id;
let auto=autos.find(auto=>{
   return (id==auto.id)
})
  
res.render("autosshow",{title:"vista de detalle", auto})
}


}