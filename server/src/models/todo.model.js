import { Schema, Types, model } from "mongoose";
/**create todo schema with validation with timestamps value  */
const TodoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 3,
            maxLength: 32,
        },
        isDone: {
            type: Boolean,
            default: false,
        },
        createdBy: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
//  export todo model
export const TodoModel = model("todo", TodoSchema);
