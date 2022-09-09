import authService from "../services/authService.js";

export const login = (request, response) => {
  authService
    .login(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const registration = (request, response) => {
  authService
    .login(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};
