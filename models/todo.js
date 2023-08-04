import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
