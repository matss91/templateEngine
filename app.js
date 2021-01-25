const express=require("express");
const app=express();
const port=3000;



app.set("view engine","ejs");//seteo motor de vistas
app.set("views",__dirname+"/views");
app.use(express.static(__dirname+"/public"))
const indexRouter=require("./routes/indexRouter")
const autosRouter=require("./routes/autosRouter")


app.use("/",indexRouter)
app.use("/autos",autosRouter)

app.listen(port,()=>console.log("servidor corriendo en puerto "+port))
