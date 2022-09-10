// https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
// https://masteringjs.io/tutorials/mongoose/findoneandupdate

import logger from "../config/logger.js";
import UserModel from "../models/UserModel.js";
import userService from "./userService.js";

export const login = (user) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({
      email: user.email,
      password: user.password,
    })
      .exec()
      .then((userExist) => {
        if (!userExist) {
          return resolve("User not found");
        }
        console.log(userExist);
        return resolve(userService.getUser(userExist._id));
      })
      .catch((err) => {
        logger.error("Error in login request to database!");
        return reject(err);
      });
  });
};

export const registration = (user) => {
  return new Promise((resolve, reject) => {
    const validEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!validEmail.test(user.email.toLowerCase())) {
      return resolve("Email not valid");
    }

    UserModel.findOne({
      email: user.email,
    })
      .exec()
      .then((userExist) => {
        if (userExist) {
          return resolve("Email already exists");
        }

        return resolve(userService.addUser(user));
      })
      .catch((err) => {
        logger.error("Error in registration request to database!");
        return reject(err);
      });
  });
};

export default { login, registration };
