// importing modules here

import express from "express";
import userRouter from "./src/features/routes/routes.js";
import bodyParser from "body-parser"
import { ErrorHandlerMiddleware } from "./src/middleware/errorHandler.js";

const server  = express();

// body Parser
server.use(bodyParser.json());

server.use(express.urlencoded({extended:true}));

// router for requests

server.use('/api/' , userRouter)

// Error Handler

server.use(ErrorHandlerMiddleware);

export default server;