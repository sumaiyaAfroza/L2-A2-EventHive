import { Router } from "express";
import { authController } from "./authController";

export const authRouter : Router = Router()

authRouter.post('/', authController)