import fs from "fs";
import logger from "../config/logger.js";

export const addUserToJsonFile = (user) => {
  return new Promise((resolve, reject) => {
    const usersJson = fs.readFileSync("./src/data/users.json", "utf8");
    const users = JSON.parse(usersJson);

    users.push(user);
    const jsonStr = JSON.stringify(users);

    fs.writeFileSync("./src/data/users.json", jsonStr, "utf8", function (err) {
      if (err) {
        logger.error("Error to append user json file", err);
      } else {
        logger.info("Append user to json file");
      }
    });
  });
};
