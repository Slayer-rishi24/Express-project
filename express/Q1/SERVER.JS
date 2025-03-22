const express = require('express');
const app=express();
app.get("/",(req,resp)=>{
    resp.sendFile("./views/about.html",{root:__dirname});
    
})
app.get("/home",(req,resp)=>{
    resp.sendFile("./views/home.html",{root:__dirname});
    
})

app.listen(2025,()=>{
    console.log("server is runn");

})