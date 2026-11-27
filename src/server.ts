import { app } from "./app";
import { envConfig } from "./config/env";

app.listen(envConfig.port, (error)=> {
    if(error) {
        console.error('failed to start server ',error)
        process.exit(1)
    }
    
    console.log(`server is running ${envConfig.port}`)

})