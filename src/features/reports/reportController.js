import { createPatientReport, getReports, getReportsByStatus } from "./reportRepository.js";



export async function createReport(req, res, next){
    try{
        const doctorId = req.userId;
        const doctorname = req.username;

        const {id}=req.params;
        const patientId = id;

        const {status}= req.body;
        const report = await createPatientReport( doctorId, doctorname, patientId,status);
        res.status(200).send(report)

    }catch(err){
        next(err);
    }

}


export async function getPatientReport(req, res, next){
    try{
        const {id}=req.params;
        

        const reports = await getReports(id)

        res.status(200).send(reports)

    }catch(err){
        next(err);
    }
}

export async function getReportOnPatientStatus(req, res, next){
    try{

        const {status}=req.params;

        const reports = await getReportsByStatus(status);

        res.status(200).send(reports);

    }catch(err){
        next(err)
    }
}