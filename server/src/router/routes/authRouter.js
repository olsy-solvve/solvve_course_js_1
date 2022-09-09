import { Router } from "express";

import { login, registration } from "../../controllers/AuthController.js";

const authRouter = Router();

authRouter.post("/login", login);

authRouter.post("/registration", registration);

export default authRouter;
