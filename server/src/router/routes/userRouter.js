import { Router } from "express";

import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../../controllers/UserController.js";

const userRouter = Router();

userRouter.get("/users", getUsers);

userRouter.get("/user/:id", getUser);

userRouter.post("/user", addUser);

userRouter.put("/user", updateUser);

userRouter.delete("/user/:id", deleteUser);

export default userRouter;
