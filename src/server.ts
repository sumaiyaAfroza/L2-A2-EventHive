import { app } from "./app";
import { databaseSchema } from "./config/dbSchemas";
import { envConfig } from "./config/env";

const startServer = async() : Promise<void>=> {
    try {
        await databaseSchema()
          console.log("connect database")

        app.listen(envConfig.port, (error)=> {
       if(error) {
          console.error('failed to start server ',error)
          process.exit(1)
        }
      console.log(`server is running ${envConfig.port}`)
})
    } catch (error) {   
        console.error('failed database')
    }
}

startServer()