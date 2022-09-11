import { Router } from "express";
import cors from "cors";

import {
  getTodosTypes,
  addTodosTypes,
  deleteTodosTypes,
  getRemovedTodosTypes,
  deleteRemovedTodosTypes,
  getTodosById,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../controllers/TodoTypeController.js";
import { tokenValidation } from "../../middlewares/tokenValidation.js";

const todoTypeRouter = Router();

todoTypeRouter.use(cors());
todoTypeRouter.use(tokenValidation);

todoTypeRouter.get("/todoType", getTodosTypes);

todoTypeRouter.post("/todoType", addTodosTypes);

todoTypeRouter.delete("/todoType/:id", deleteTodosTypes);

todoTypeRouter.get("/archiveTodoType", getRemovedTodosTypes);

todoTypeRouter.delete("/archiveTodoType/:id", deleteRemovedTodosTypes);

todoTypeRouter.get("/todos/:id", getTodosById);

todoTypeRouter.post("/todos", addTodo);

todoTypeRouter.put("/todos", updateTodo);

todoTypeRouter.delete("/todos/:id", deleteTodo);

export default todoTypeRouter;
