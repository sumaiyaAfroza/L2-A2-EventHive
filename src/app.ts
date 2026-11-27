import express, { type Application } from "express";

export const app : Application = express()

app.get('/', (req,res) =>{
   res.send('this is root route')
} )