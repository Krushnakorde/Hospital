
// import loggerConfig here to log all requests and Error
import { logger } from "../config/configWinstonLogger.js";





// application level error handler

export default class ApplicationError extends Error{
    constructor(code, message){
        super(message);
        this.code=code;
    }

}




// Error Handler for all request and all errors


export const ErrorHandlerMiddleware=(err, req, res, next)=>{
    console.log(err);
const loggerData =  `timestamp:${new Date().toString()}, requestUrl:${req.url}, statusCode:${err.code}), mssage:${err.message}`
    
   
    if(err instanceof ApplicationError){
        // logger logs application Error here
        logger.error(loggerData);
        return res.status(err.code).send(err.message);
    }else{

    // logger logs Error other than application Error 
    logger.info(loggerData);

    return res.status(500).send("Internal server error");

    }
}