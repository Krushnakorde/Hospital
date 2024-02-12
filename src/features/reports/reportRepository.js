import { reportModel } from "./reportSchema.js";

import {userModel} from "../users/userSchema.js";
import ApplicationError from "../../middleware/errorHandler.js";


// creating new patient report

export async function createPatientReport(doctorId, doctorname, patientId, status){

    const report = new reportModel({doctorId, doctorname, patientId, status});

    const savedReport = await report.save();

    const patient =await userModel.findById(patientId);
    
    patient.reports.push(savedReport._id);

    patient.save()

    return savedReport;

}


    // get all reports with particular patients;

export async function getReports(patientId){
    const reports = await reportModel.find({patientId})
    if(reports.length==0){
        throw new ApplicationError(200, "The Patient Reports are not available");
    }
    return reports;
}


    // getting report with specific status

export async function getReportsByStatus(status){
    const reports = await reportModel.find({status});
    if(reports.length==0){
        throw new ApplicationError(200, "The Given status reports are not availabel");
    }

    return reports;
}