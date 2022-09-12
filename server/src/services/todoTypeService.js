// https://codeforgeek.com/insert-a-document-into-mongodb-using-mongoose/
// https://masteringjs.io/tutorials/mongoose/findoneandupdate

import TodoTypeModel from "../models/todoTypeModel.js";
import logger from "../config/logger.js";
import mongoose from "mongoose";

export const getTodosTypes = () => {
  return TodoTypeModel.find({})
    .then((todoTypes) => {
      const result = todoTypes.reduce((res, todoType) => {
        res.push({ id: todoType._id, label: todoType.label, removed: todoType.removed, fullRemoved: todoType.fullRemoved });
        return res;
      }, []);

      logger.info("Get all todos Types from mongodb!", result);
      return result;
    })
    .catch((err) => {
      logger.error("Can`t get all todos Types from mongodb!", err);
      return { error: err };
    });
};

export const addTodosTypes = ({ newType }) => {
  const newTodoType = new TodoTypeModel({
    label: newType,
    removed: false,
    fullRemoved: false,
  });

  return newTodoType
    .save()
    .then((todoType) => {
      logger.info("Add todoType in mongodb!", todoType.label);
      return todoType.label;
    })
    .catch((err) => {
      logger.error("Can`t add todoType in mongodb!", err);
      return { error: err };
    });
};

export const deleteTodosTypes = (todoTypeId) => {
  const todoType = TodoTypeModel.findOneAndUpdate(
    { _id: todoTypeId },
    { removed: true },
  );

  if (!todoType) {
    logger.error("Can`t delete todoType in mongodb!");
  }

  logger.info("Delete todoType in mongodb!", todoType);
  return todoType;
};

export const getRemovedTodosTypes = () => {
  return TodoTypeModel.find({ removed: true })
    .then((todoTypes) => {
      const result = todoTypes.reduce((res, todoType) => {
        res.push({ id: todoType._id, label: todoType.label });
        return res;
      }, []);

      logger.info("Get all todos Types from mongodb!", result);
      return result;
    })
    .catch((err) => {
      logger.error("Can`t get all todos Types from mongodb!", err);
      return { error: err };
    });
};

export const getRemovedTodosById = (id) => {
  return TodoTypeModel.findOne({ _id: id, removed: true })
    .then((res) => {
      logger.info("Get all todos from mongodb!", res.todos);
      return res.todos;
    })
    .catch((err) => {
      logger.error("Can`t get all todos from mongodb!", err);
      return { error: err };
    });
};

export const deleteRemovedTodosTypes = (todoTypeId) => {
  const todoType = TodoTypeModel.findOneAndUpdate(
    { _id: todoTypeId },
    { removed: true },
  );

  if (!todoType) {
    logger.error("Can`t delete todoType in mongodb!");
  }

  logger.info("Delete todoType in mongodb!", todoType);
  return todoType;
};

export const getTodosById = (id) => {
  return TodoTypeModel.findOne({ _id: id })
    .then((res) => {
      logger.info("Get all todos from mongodb!", res.todos);
      return res.todos;
    })
    .catch((err) => {
      logger.error("Can`t get all todos from mongodb!", err);
      return { error: err };
    });
};

export const addTodo = ({ typeId, todo }) => {
  const newTodo = {
    _id: mongoose.Types.ObjectId(),
    label: todo.label,
    description: todo.description,
    removed: false,
    fullRemoved: false,
  };

  return TodoTypeModel.findOne({ _id: typeId }).then((res) => {
    res.todos.push(newTodo);

    return res
      .save()
      .then((tT) => {
        logger.info("Add todo in mongodb!", tT.data);
        console.log(tT.data);
        return tT.data;
      })
      .catch((err) => {
        logger.error("Can`t add todo in mongodb!", err);
        return { error: err };
      });
  });
};

export const updateTodo = (updateTodoType) => {
  TodoTypeModel.findOneAndUpdate({ _id: updateTodoType }, updateTodoType, {
    new: true,
    upsert: true,
  })
    .then((todoType) => {
      logger.info("Update todo in mongodb!", todoType);
      return todoType;
    })
    .catch((err) => {
      logger.error("Can`t update todo in mongodb!", err);
      return { error: err };
    });
};

export const deleteTodo = ({ todoTypeId, todoId }) => {
  TodoTypeModel.findOne({ _id: todoTypeId })
    .then((res) => {
      logger.info("Get all todos from mongodb!", res.todos);
      const todo = res.todos.find((t) => t._id === todoId);
      todo.removed = true;
    })
    .catch((err) => {
      logger.error("Can`t get all todos from mongodb!", err);
      return { error: err };
    });
};

export default {
  getTodosTypes,
  addTodosTypes,
  deleteTodosTypes,
  getTodosById,
  addTodo,
  updateTodo,
  deleteTodo,
};
