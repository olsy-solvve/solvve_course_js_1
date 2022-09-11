import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRouter.js";
import logger from "../config/logger.js";

const router = (app) => {
  app.use(authRouter);
  app.use(userRouter);

  app.get("/", function (req, res, next) {
    logger.info("Open default page");
    res.status(200).send("<h3>Main Page</h3>");
  });

  app.use(function (req, res, next) {
    logger.info("Not found page");
    res.status(404).send("Not Found");
  });
};

export default router;
