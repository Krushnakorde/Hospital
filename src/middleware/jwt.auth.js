import jwt from "jsonwebtoken"

// jwt authenticate user

export const jwtAuth =async (req, res, next)=>{


    // getting token from request
    const authtoken = req.headers['authorization'];


    if(!authtoken){
        return res.status(401).send("unauthorized");
    }

    try{

        
        // verifying token here
        const data =await jwt.verify(authtoken, "codinNinjas")


        if(data.usertype!="Doctor"){
        return res.status(401).send("unauthorized");
        }

        // sending userId and username with req  

        req.userId=data.userId;
        req.username=data.username;

    }catch(err){
        return res.status(401).send("unauthorized");
    }

    next();



    

}




