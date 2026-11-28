import express, { type Application } from "express";
import { globalErrorHandler } from "./middleware/error.middleware";

export const app : Application = express()

app.use('/api/v1/auth', authRoute)

app.get('/', (req,res) =>{
   res.send('this is root route')
} )


app.use(globalErrorHandler)