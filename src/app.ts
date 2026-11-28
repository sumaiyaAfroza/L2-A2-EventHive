import express, { type Application } from "express";
import { globalErrorHandler } from "./middleware/error.middleware";
import { authRouter } from "./modules/auth/auth.route";

export const app : Application = express()

app.use('/api/v1/auth', authRouter)

app.get('/', (req,res) =>{
   res.send('this is root route')
} )


app.use(globalErrorHandler)