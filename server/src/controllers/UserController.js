// import logger from "../config/logger.js";
import userService from "../services/userService.js";

export const getUsers = async (request, response) => {
  const users = await userService.getAllUsers();
  response.status(201).send("Get all users", users);
};

export const getUser = async (request, response) => {
  const user = await userService.getUser();
  response.status(201).send("Get user", user);
};

export const addUser = async (request, response) => {
  const user = await userService.addUser(request.body);
  console.log(user);
  response.status(201).send("User added", user);
};

export const updateUser = async (request, response) => {
  const user = await userService.updateUser();
  response.status(201).send("User updated", user);
};

export const deleteUser = async (request, response) => {
  const user = await userService.deleteUser();
  response.status(201).send("User deleted", user);
};
