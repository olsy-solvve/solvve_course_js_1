import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    label: "string",
    removed: "boolean",
    fullRemoved: "boolean",
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } },
);

const TodoTypeModel = mongoose.model("todoType", userSchema);

export default TodoTypeModel;
