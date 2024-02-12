import mongoose from "mongoose"


// creating report schema

const reportSchema = new mongoose.Schema({
    doctorId:{
        type:mongoose.Types.ObjectId,
        required:[true, "Doctor userId is required"],
        ref:'User'
    },
    doctorname:{
        type:String,
        required:[true, "Doctor name is required"]
    
    },
    patientId:{
        type:mongoose.Types.ObjectId,
        required:[true, "Patient userId is required"]
    },
    status:{
        type:String,
        enum:['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        required:[true,"patient status is required, it must be one of 'Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine' or 'Positive-Admit'"]
    },
    date:{
        type:Date,
        default:Date.now,
    }


})

// exporting and creating model for report of patients by doctors

export const reportModel = mongoose.model("Report", reportSchema); 