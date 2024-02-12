// server is imported

import server from "./index.js"
import connectToMongoose from "./src/config/configMongoose.js";

const port=8000;

server.listen(port, ()=>{
    console.log("server is ported on 8000");
    connectToMongoose();
})