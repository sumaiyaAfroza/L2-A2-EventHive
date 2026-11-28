import type { Request, Response } from "express";
import { authService } from "./auth.service";

export const authController = {
     async  signup (req: Request, res: Response) : Promise<void> {
        const user = await authService(req.body)
    }
}

