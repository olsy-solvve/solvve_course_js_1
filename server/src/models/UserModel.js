// https://www.npmjs.com/package/mongoose

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: "string",
    email: "string",
    password: "string",
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } },
);

const UserModel = mongoose.model("users", userSchema);

export default UserModel;
