import { Schema, model } from "mongoose";

const TodoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isDone: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export const TodoModel = model("todo", TodoSchema);
