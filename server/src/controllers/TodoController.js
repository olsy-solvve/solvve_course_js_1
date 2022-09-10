// import logger from "../config/logger.js";
import todoService from "../services/todoService.js";

export const getTodos = (request, response) => {
  todoService
    .getTodos()
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const getTodo = (request, response) => {
  todoService
    .getTodo(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const addTodo = (request, response) => {
  todoService
    .addTodo(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const updateTodo = (request, response) => {
  todoService
    .updateTodo(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const deleteTodo = (request, response) => {
  todoService
    .deleteTodo(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};
