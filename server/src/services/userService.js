// https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
// https://masteringjs.io/tutorials/mongoose/findoneandupdate

import UserModel from "../models/UserModel.js";
import logger from "../config/logger.js";

export const getAllUsers = () => {
  UserModel.find({})
    .then((users) => {
      logger.info("Get all users from mongodb!", users);
      return users;
    })
    .catch((err) => {
      logger.error("Can`t get all user from mongodb!", err);
      return { error: err };
    });
};

export const getUser = (userId) => {
  UserModel.findOne({ _id: userId })
    .then((user) => {
      logger.info("Get user from mongodb!", user);
      return user;
    })
    .catch((err) => {
      logger.error("Can`t get user from mongodb!", err);
      return { error: err };
    });
};

export const addUser = (newUser) => {
  const user = new UserModel({
    username: newUser.username,
    email: newUser.email,
    password: newUser.password
  });

  user
    .save()
    .then((u) => {
      logger.info("Add user in mongodb!", u);
      return u;
    })
    .catch((err) => {
      logger.error("Can`t add user in mongodb!", err);
      return { error: err };
    });
};

export const updateUser = (updateUser) => {
  UserModel.findOneAndUpdate({ _id: updateUser }, updateUser, {
    new: true,
    upsert: true
  })
    .then((user) => {
      logger.info("Update user in mongodb!", user);
      return user;
    })
    .catch((err) => {
      logger.error("Can`t update user in mongodb!", err);
      return { error: err };
    });
};

export const deleteUser = (userId) => {
  UserModel.findOneAndDelete({ _id: userId })
    .then((user) => {
      logger.info("Delete user in mongodb!", user);
      return user;
    })
    .catch((err) => {
      logger.error("Can`t delete user in mongodb!", err);
      return { error: err };
    });
};

export default { getAllUsers, getUser, addUser, updateUser, deleteUser };
