//this is a completely extra file

import mongoose from "mongoose";
import connectDb from "../backend/config/db.js";
import dotenv from 'dotenv';
import colors from "colors";

import Data from "./models/dataModel.js";
import Order from "./models/orderModel.js";
import User from "./models/userModel.js";
import UserDetails from '../backend/data/users.js'
import teabagsData from "../backend/data/teabagsData.js";


import Teadata from "./models/teaBagsmodel.js";
import data from "../backend/data/data.js";

dotenv.config();

connectDb();

const importData = async () => {
    try {
        await Data.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();
        await Teadata.deleteMany();


        const createdUsers = await User.insertMany(UserDetails);
        console.log('checking what i am getting',createdUsers);
        const adminUser = createdUsers[0]._id;

        const sampleData = data.map((item) => {
            return {...item, user: adminUser};
        });
        console.log('sample data1',sampleData);
        
        const sampleTeaData= await teabagsData.map((item)=>{
            return {...item, user: adminUser};
        })
        console.log('sample data2',sampleTeaData);

        await Data.insertMany(sampleData);
        await Teadata.insertMany(sampleTeaData);
        console.log("Data imported successfully!".green.inverse);
    } catch (error) {
        console.error(`Error importing data, ${error}`.red.inverse);
    }
}

const destroyData=async()=>{
    try {
        await Data.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();
        await Teadata.deleteMany();
        console.log("Data destroyed successfully!".green.inverse);
    } catch (error) {
        console.error("Error destroying data", error);
    }
}

if (process.argv[2] === "-d") {
    destroyData();
}else{
    importData();
}