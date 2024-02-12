

import mongoose from "mongoose";


// creating user Schmema


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Provide user name"]
    },

    mobile:{
        type:Number,
        unique:true,
    },
    
    password:{
        type:String,
        minLength:[8, "Password should be at least 8 characters long"],   
    },   

    type:{
        type:String,
        enum:['Doctor','Patient' ],
        required:[true, "The user type is required; it must be either 'Doctor' or 'Patient' "]
    },
    reports:[{
        type:mongoose.Types.ObjectId,
        ref:'Report'
    }]


})



// exporting and creating model for user 
export const userModel = mongoose.model('User', userSchema);


