import mongoose from "mongoose";


// mongoose configuration

const connectToMongoose = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/Hospital");
    
    console.log("mongoose connected");
}

export default connectToMongoose;