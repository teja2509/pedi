const express = require("express");
const path = require("path");




const app  = express();

const port = process.env.PORT||3018;


app.set("view engine","ejs");

//load static assets

app.use("/static",express.static(path.join(__dirname,"public")))
app.use("/assets",express.static(path.join(__dirname,"public/assets")))




//home route

app.get("/",(req,res)=>{
    res.render("home",{title:"pedi"});
})

app.get("/auto_garage",(req,res)=>{
    res.render("auto_garage");
})

app.get("/home",(req,res)=>{
    res.render("home");
})

app.get("/auto",(req,res)=>{
    res.render("auto");
})

app.get("/garage",(req,res)=>{
    res.render("garage");
})

app.get("/rentals",(req,res)=>{
    res.render("rentals");
})

app.get("/thank-you",(req,res)=>{
    res.render("thank-you");
})



app.listen(port,()=>{
    console.log("Listening to the server on https://localhost:3018 ")
});
