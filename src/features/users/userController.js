// import jwt token from for authentication

import jwt from "jsonwebtoken";

import mongoose from "mongoose";

// importing user repository here
import UserRepository from "./userRepository.js";

const userRepository = new UserRepository();

export async function  doctorRegistration(req, res, next){

    try{
        const {username, mobile, password, type} = req.body;

        
        if(type!='Doctor'){
            return res.status(400).send("Registration for Doctor.");
        }
        if(!password){
            return res.status(400).send("Password is required");
        }
        const user = await userRepository.doctorRegistration(username, mobile, password, type);
        
        res.status(200).send(user);
    }catch(err){

        if(mongoose.Error){
            return res.status(400).send('The provided Mobile Number is already registerd');
        }
        next(err);
    }
}


export async function doctorLogin(req, res, next){
    try{

        const {username , password} = req.body;

        const user = await userRepository.login(username, password);

        const token = jwt.sign({userId:user._id, username:user.username, usertype:user.type}, "codinNinjas",{expiresIn:'1h'})

        res.status(200).cookie("jwtToken",token, {maxAge:1*60*60*1000}).send(token);

              


    }catch(err){
        next(err);
    }
}

export async function patientRegistration(req, res, next){

    try{
        const {username, mobile, password, type} = req.body;

        if(!mobile){
            return res.status(400).send("To register, Mobile Number is mandatory")
        }

        if(type!='Patient'){
            return res.status(400).send("Registration for Patient.");
        }

        const user = await userRepository.patientRegistration(username, parseFloat(mobile), type);
        
        res.status(200).send(user);
    }catch(err){
        next(err);
    }


}


