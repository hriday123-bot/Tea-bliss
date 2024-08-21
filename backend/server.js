import express from 'express';
import data from './data/data.js'; 
import teabags from './data/teabagsData.js'; 
import connectDb from './config/db.js';
import dataRoute from './routes/dataRoutes.js';
import teabagsRoute from './routes/teabagsRoute.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';

dotenv.config();  
connectDb();

const app=express();
const port=process.env.PORT ||3002;

app.use('/api/data',dataRoute)
app.use('/api/teabags',teabagsRoute);
app.use(notFound);
app.use(errorHandler)



app.listen(port,(err)=>{
    if(err)return res.status(500).send({message:'Error listening on port'});
    console.log(`Server is running on port ${port}`);
})