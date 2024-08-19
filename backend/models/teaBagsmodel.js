import mongoose from "mongoose";


//we will create schema for the data showing in UI 
//similarly we will create schema for reviews where user, comment rating etc.

const reviewSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name:{type:String, required:true},
    rating:{type:String, required:true},
    Comment:{type:String, required:true},
},{timestams:true})

const teaBagsDataSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name:String,
    category:String,
    price:Number,
    description:String,
    rating:Number,
    inStock:Boolean,
    origin:String,
    image:String,
    numberOfReviews:Number,
    reviews:[reviewSchema]
})

const Teadata=mongoose.model('Teadata',teaBagsDataSchema);
export default Teadata;