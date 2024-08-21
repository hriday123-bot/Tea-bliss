import asyncHandler from "../middleware/asyncHandler.js";
import Data from "../models/dataModel.js";

const getData=asyncHandler(async (req,res)=>{
    const data=await Data.find({});
    return res.json(data);
})

const getDataId=asyncHandler(async (req,res)=>{
    console.log('checking',req.params.id);
    const data=await Data.findById(req.params.id)
    if(data) return res.json(data);
    else 
    {   console.log('data not found for',req.params.id); 
    
        return res.status(404).send({message:'Data not found'});}
})

export{getData,getDataId};
