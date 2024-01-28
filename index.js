const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');


const server=express();
server.use(cors())
server.use(bodyParser.json())

// mongoose.connect("mongodb://localhost:27017",)

server.get('/demo',(req,res)=>{
    res.send('hello')
})

server.post('/demo',(req,res)=>{
console.log(req.body);
res.json(req.body);
})

server.listen(8080,()=>{
console.log('server started');
})
