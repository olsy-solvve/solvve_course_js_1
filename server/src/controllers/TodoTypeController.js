// import logger from "../config/logger.js";
import todoTypeService from "../services/todoTypeService.js";

export const getTodosTypes = (request, response) => {
  todoTypeService
    .getTodosTypes()
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const addTodosTypes = (request, response) => {
  todoTypeService
    .addTodosTypes(request.body)
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const deleteTodosTypes = (request, response) => {
  todoTypeService
    .deleteTodosTypes(request.params.id)
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const getRemovedTodosTypes = (request, response) => {
  todoTypeService
    .getRemovedTodosTypes()
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const deleteRemovedTodosTypes = (request, response) => {
  todoTypeService
    .deleteRemovedTodosTypes(request.params.id)
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const getTodosById = (request, response) => {
  todoTypeService
    .getTodosById(request.params.id)
    .then((res) => {
      response.status(201).json(res);
    })
    .catch((err) => {
      response.status(404).json(err);
    });
};

export const addTodo = (request, response) => {
  console.log(request.body);
  todoTypeService
    .addTodo(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const updateTodo = (request, response) => {
  todoTypeService
    .updateTodo(request.body)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};

export const deleteTodo = (request, response) => {
  todoTypeService
    .deleteTodo(request.params.id)
    .then((res) => {
      response.status(201).send(res);
    })
    .catch((err) => {
      response.status(404).send(err);
    });
};
