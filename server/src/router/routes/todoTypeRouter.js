import { Router } from "express";

import {
  getTodosTypes,
  addTodoType,
  updateTodoType,
  deleteTodoType,
  getTodoType,
} from "../../controllers/TodoTypeController.js";

const todoTypeRouter = Router();

todoTypeRouter.get("/todoType", getTodosTypes);

todoTypeRouter.get("/todoType/:id", getTodoType);

todoTypeRouter.post("/todoType", addTodoType);

todoTypeRouter.put("/todoType", updateTodoType);

todoTypeRouter.delete("/todoType/:id", deleteTodoType);

export default todoTypeRouter;
