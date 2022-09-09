// https://www.npmjs.com/package/mongoose

import mongoose from "mongoose";
import logger from "./logger.js";
// import { fillingUsersCollection } from "./initDatabase.js";

const connect = () => {
  const connectionString =
    process.env.ATLAS_URI ||
    "mongodb+srv://Krian_md:guoDF8mFEjj3cW11@it.2bcbqqg.mongodb.net/todo_solvve?retryWrites=true&w=majority";

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
    })
    .then(() => {
      logger.info("Connected to database");
      // fillingUsersCollection();
    })
    .catch((err) => {
      logger.error("Error connecting to database", err);
    });
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }
  mongoose.connection.close();
  logger.info("Diconnected  to database");
};

export default {
  connect,
  disconnect,
};
