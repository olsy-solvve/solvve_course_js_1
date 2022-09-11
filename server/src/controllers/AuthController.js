import authService from "../services/authService.js";

export const login = (request, response) => {
  authService
    .login(request.body)
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const registration = (request, response) => {
  authService
    .registration(request.body)
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};
