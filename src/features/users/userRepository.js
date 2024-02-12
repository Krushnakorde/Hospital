// imported bcrypt for hashing password
import bcrypt from 'bcrypt'
import ApplicationError from "../../middleware/errorHandler.js";
import {userModel} from "./userSchema.js";


export default class UserRepository{
  
    async doctorRegistration(username, mobile, password, type){

        // hashing password 
        const hashedPassword= await bcrypt.hash(password, 10);

        
        const user = new userModel({username, mobile, password:hashedPassword, type})

        const savedUser = await user.save();

        if(!savedUser){
            return new ApplicationError(400, 'Failed to register')
        }

        return savedUser;
    }


    async login(username, password){
    
        
        const user =  await  userModel.findOne({username});
        if(!user){
            throw new ApplicationError(400, 'Invalid username')
        }

        // comparing hashed password

        const res = await bcrypt.compare(password, user.password);
        if(!res){
            throw new ApplicationError (400, "Password is")
        }
        return user;

    }


    async patientRegistration( username, mobile, type){

        let user = await userModel.findOne({mobile});
        if(user){
            return user;
        }
        
        
         user = new userModel({username, mobile, type})

        const savedUser = await user.save();

        if(!savedUser){
            return new ApplicationError(400, 'Failed to register')
        }

        return savedUser;
    }

}