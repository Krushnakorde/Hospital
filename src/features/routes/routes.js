import express from 'express';
import { doctorLogin, doctorRegistration, patientRegistration } from '../users/userController.js';
import { jwtAuth } from '../../middleware/jwt.auth.js';
import { createReport, getPatientReport, getReportOnPatientStatus } from '../reports/reportController.js';


const userRouter = express.Router();

// registration and validation part
userRouter.post("/doctors/register", doctorRegistration);

userRouter.post("/doctors/login", doctorLogin)

userRouter.post("/patients/register", jwtAuth, patientRegistration)


// report part

userRouter.post("/patients/:id/create_report" , jwtAuth, createReport)

userRouter.get("/patients/:id/all_report",jwtAuth, getPatientReport)

userRouter.get("/reports/:status",jwtAuth, getReportOnPatientStatus)




export default userRouter;