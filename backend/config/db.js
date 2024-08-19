import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
        console.log('Intitializing database connection');
        const conn=await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected at the port: '+conn.connection.port);
        
    } catch (error) {
        console.error('Error connecting to MongoDB',error.message);
        process.exit(1)
    }
}

export default connectDb;