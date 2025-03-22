const express = require('express');
const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/Express_Db") .then(() => {
    console.log("connected");
    
}).catch((err) => {
    console.log(err);
    
});


const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    sal:{
        type:Number,
        required:true
    }
})

const empModel = mongoose.model("Emp",empSchema);


const app=express();
app.use(express.json());    

//add or post
app.post('/addEmp', async(req,resp)=>{
    const data = new empModel({
        name:req.body.name,
        sal:req.body.sal
    })
    const result = await data.save();
    console.log(result);
    resp.json(result)
    
})

//show
app.get('/' , async(req, resp)=>{
    const result = await empModel.find();
    console.log(result);
    resp.json(result)
    
})

//update or put
app.put('/update/:id', async(req,resp)=>{
    try {
        const emp = await empModel.findByIdAndUpdate(req.params.id, req.body , {name:true})
        console.log(emp);
        resp.json(emp);
    } catch (error) {
        console.log(error);
        
    }
})

//delete
app.delete('/delete/:id',  async(req, resp)=>{
    try {
        const empId = await empModel.deleteOne({_id:req.params.id})
        console.log(empId);
        resp.json(empId);
        
    } catch (err) {
        console.log(err);
        
    }
})

app.listen(2000,()=>{
    console.log("server is runing");
    
})