import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError";


export const globalErrorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
          ...(err.errors?.length ? {errors: err.errors} : {})
        })
        return
    }
console.log(err)
res.status(500).json({
    success: false,
    message: 'internal server error'
})
}