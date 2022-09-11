import { Router } from "express";
import cors from "cors";

import { login, registration } from "../../controllers/AuthController.js";

const authRouter = Router();

authRouter.use(cors());

authRouter.post("/login", login);

authRouter.post("/registration", registration);

export default authRouter;
