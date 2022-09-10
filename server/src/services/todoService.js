// https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
// https://masteringjs.io/tutorials/mongoose/findoneandupdate

import TodoModel from "../models/todoModel.js";
import logger from "../config/logger.js";

export const getTodos = () => {
  return TodoModel.find({})
    .then((todos) => {
      logger.info("Get all todos from mongodb!", todos);
      return todos;
    })
    .catch((err) => {
      logger.error("Can`t get all todos from mongodb!", err);
      return { error: err };
    });
};

export const getTodo = (todoId) => {
  TodoModel.findOne({ _id: todoId })
    .then((todo) => {
      logger.info("Get todo from mongodb!", todo);
      return todo;
    })
    .catch((err) => {
      logger.error("Can`t get todo from mongodb!", err);
      return { error: err };
    });
};

export const addTodo = (newTodo) => {
  const todo = new TodoModel({
    label: newTodo.label,
    removed: newTodo.removed,
    completed: newTodo.completed,
    discription: newTodo.discription,
  });

  todo
    .save()
    .then((t) => {
      logger.info("Add todo in mongodb!", t);
      return t;
    })
    .catch((err) => {
      logger.error("Can`t add todo in mongodb!", err);
      return { error: err };
    });
};

export const updateTodo = (updateTodo) => {
  TodoModel.findOneAndUpdate({ _id: updateTodo }, updateTodo, {
    new: true,
    upsert: true,
  })
    .then((todo) => {
      logger.info("Update todo in mongodb!", todo);
      return todo;
    })
    .catch((err) => {
      logger.error("Can`t update todo in mongodb!", err);
      return { error: err };
    });
};

export const deleteTodo = (todoId) => {
  TodoModel.findOneAndDelete({ _id: todoId })
    .then((todo) => {
      logger.info("Delete todo in mongodb!", todo);
      return todo;
    })
    .catch((err) => {
      logger.error("Can`t delete todo in mongodb!", err);
      return { error: err };
    });
};

export default { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
