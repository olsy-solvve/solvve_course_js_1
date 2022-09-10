import { Router } from "express";

import {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../controllers/TodoController.js";

const todoRouter = Router();

todoRouter.get("/todos", getTodos);

todoRouter.get("/todo/:id", getTodo);

todoRouter.post("/todo", addTodo);

todoRouter.put("/todo", updateTodo);

todoRouter.delete("/todo/:id", deleteTodo);

export default todoRouter;
