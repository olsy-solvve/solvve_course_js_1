// import logger from "../config/logger.js";
import todoTypeService from "../services/todoTypeService.js";

export const getTodosTypes = (request, response) => {
  todoTypeService
    .getTodosTypes()
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const getTodoType = (request, response) => {
  todoTypeService
    .getTodoType(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const addTodoType = (request, response) => {
  todoTypeService
    .addTodoType(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const updateTodoType = (request, response) => {
  todoTypeService
    .updateTodoType(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const deleteTodoType = (request, response) => {
  todoTypeService
    .deleteTodoType(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};
