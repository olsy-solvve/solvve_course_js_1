// https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
// https://masteringjs.io/tutorials/mongoose/findoneandupdate

// import logger from "../config/logger.js";
import UserModel from "../models/UserModel.js";

export const login = (user) => {
  console.log(UserModel.exists({ email: user.email }));
  return user;
};

export const registration = (user) => {
  return user;
};

export default {};
