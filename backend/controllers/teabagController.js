import asyncHandler from "../middleware/asyncHandler.js";
import Teadata from "../models/teaBagsmodel.js";

const teabag=asyncHandler(async(req,res)=>{
    try {
        const data=await Teadata.find({});
        return res.json(data)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

})

const teabagById=asyncHandler(async(req,res)=>{
    try {
        const data=await Teadata.findById(req.params.id);
        if(!data){
            throw new Error('Product not found');
        }
        return res.json(data)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

})

export {teabag,teabagById}