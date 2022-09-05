// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-mevn-stack-10b6e8ff7f7c

import express from "express";
import database from "./src/config/database.js";
import logger from "./src/config/logger.js";
import router from "./src/router/index.js";

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  logger.info(`The server is running on port http://localhost:${PORT}/`);
  database.connect();
  router(app);
});

export default app;
