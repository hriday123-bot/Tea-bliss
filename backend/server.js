import express from 'express';
import data from './data/data.js'; 
import teabags from './data/teabagsData.js'; 
import connectDb from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();  
connectDb();

const app=express();
const port=process.env.PORT ||3002;

app.get('/',(req,res)=>{
    res.send('Hey Hriday Hello World from Express');
})

app.get('/api/data',(req,res)=>{
    return res.json(data)
})

app.get(`/api/teabags`,(req,res)=>{
    return res.json(teabags)
})
app.get('/api/data/:id',(req,res)=>{
    const tea=data.find(item=>item.id===Number(req.params.id));
    if(tea!==undefined)return res.json(tea)
    else return res.status(404).send({message:'Data not found'});    
})

app.listen(port,(err)=>{
    if(err)return res.status(500).send({message:'Error listening on port'});
    console.log(`Server is running on port ${port}`);
})