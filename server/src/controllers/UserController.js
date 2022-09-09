import userService from "../services/userService.js";

export const getUsers = (request, response) => {
  userService
    .getAllUsers()
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const getUser = (request, response) => {
  userService
    .getUser(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const addUser = (request, response) => {
  userService
    .addUser(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const updateUser = (request, response) => {
  userService
    .updateUser(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const deleteUser = (request, response) => {
  userService
    .deleteUser(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};
