import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    label: "string",
    removed: "boolean",
    completed: "boolean",
    discription: "string",
    // type: ""
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } },
);

const TodoModel = mongoose.model("todo", userSchema);

export default TodoModel;
