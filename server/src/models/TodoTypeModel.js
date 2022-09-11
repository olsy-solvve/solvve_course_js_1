import mongoose from "mongoose";

const todoTypesSchema = new mongoose.Schema(
  {
    label: "string",
    removed: "boolean",
    fullRemoved: "boolean",
    todos: [
      {
        _id: {
          type: mongoose.Types.ObjectId,
        },
        label: "string",
        description: "string",
        removed: "boolean",
        fullRemoved: "boolean",
      },
    ],
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } },
);

const TodoTypeModel = mongoose.model("todo_types", todoTypesSchema);

export default TodoTypeModel;
