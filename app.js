const express = require("express");
const path = require("path");

const app = express();

//static specific stuff
app.use("/static",express.static("static"));

//view specific stuff
app.set("view engine","pug")
app.set("/views",path.join(__dirname,"views"));

//endpoint specific stuff
app.get("/",(req,res)=>{
    res.status(200).render("index.pug");
});
app.get("/products",(req,res)=>{
    res.status(200).render("products.pug");
});


app.listen(80,()=>{
    console.log("RedStore Website online at http://localhost")
})