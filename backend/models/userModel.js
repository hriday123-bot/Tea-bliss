import mongoose from "mongoose";

const userDetails=new mongoose.Schema({
    name:{required:true,type:"string"},
    email:{required:true,type:"string",unique:true},
    password:{required:true,type:"string"},
    isAdmin:{default:false,type:Boolean}
},{timestamps:true})

const User=mongoose.model('User',userDetails);
export default User;