// https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
// https://masteringjs.io/tutorials/mongoose/findoneandupdate

import TodoTypeModel from "../models/todoTypeModel.js";
import logger from "../config/logger.js";

export const getTodosTypes = () => {
  return TodoTypeModel.find({})
    .then((todoType) => {
      logger.info("Get all todos Types from mongodb!", todoType);
      return todoType;
    })
    .catch((err) => {
      logger.error("Can`t get all todos Types from mongodb!", err);
      return { error: err };
    });
};

export const getTodoType = (todoTypeId) => {
  return TodoTypeModel.findOne({ _id: todoTypeId })
    .then((todoType) => {
      logger.info("Get todoType from mongodb!", todoType);
      return todoType;
    })
    .catch((err) => {
      logger.error("Can`t get todoType from mongodb!", err);
      return { error: err };
    });
};

export const addTodoType = (newTodoType) => {
  const todoType = new TodoTypeModel({
    label: newTodoType.label,
    removed: newTodoType.removed,
    fullRemoved: newTodoType.fullRemoved,
    data: newTodoType.data
  });

  return todoType
    .save()
    .then((tT) => {
      logger.info("Add todoType in mongodb!", tT);
      return tT;
    })
    .catch((err) => {
      logger.error("Can`t add todoType in mongodb!", err);
      return { error: err };
    });
};

export const updateTodoType = (updateTodoType) => {
  TodoTypeModel.findOneAndUpdate({ _id: updateTodoType }, updateTodoType, {
    new: true,
    upsert: true,
  })
    .then((todoType) => {
      logger.info("Update todoType in mongodb!", todoType);
      return todoType;
    })
    .catch((err) => {
      logger.error("Can`t update todoType in mongodb!", err);
      return { error: err };
    });
};

export const deleteTodoType = (todoTypeId) => {
  TodoTypeModel.findOneAndDelete({ _id: todoTypeId })
    .then((todoType) => {
      logger.info("Delete todoType in mongodb!", todoType);
      return todoType;
    })
    .catch((err) => {
      logger.error("Can`t delete todoType in mongodb!", err);
      return { error: err };
    });
};

export default { getTodosTypes, getTodoType, addTodoType, updateTodoType, deleteTodoType };
