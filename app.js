const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;

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
app.get("/product-page",(req,res)=>{
    res.status(200).render("product-page.pug");
});
app.get("/cart-page",(req,res)=>{
    res.status(200).render("cart-page.pug");
});
app.get("/account",(req,res)=>{
    res.status(200).render("account.pug");
});


app.listen(port,()=>{
    console.log(`RedStore Website online at http://localhost:${port}`)
})