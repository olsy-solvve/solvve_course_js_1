import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    label: "string",
    removed: "boolean",
    fullRemoved: "boolean",
    data: [],
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } },
);

const TodoTypeModel = mongoose.model("todo_types", userSchema);

export default TodoTypeModel;
