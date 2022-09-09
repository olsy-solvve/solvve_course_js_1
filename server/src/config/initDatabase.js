import userService from "../services/userService.js";
import fs from "fs";

export const fillingUsersCollection = () => {
  return new Promise((resolve, reject) => {
    const usersJson = fs.readFileSync("./src/data/users.json", "utf8");
    const users = JSON.parse(usersJson);
    users.forEach((user) => userService.addUser(user));
  });
};
