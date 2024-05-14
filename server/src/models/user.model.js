import { Schema, model } from "mongoose";
import validator from "validator";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
        },
        email: {
            type: String,
            required: true,
            unique: [true, "Email id already present"],
            validate(value) {
                const isEmail = validator.isEmail(value);
                if (!isEmail) {
                    throw new Error("Invalid email");
                }
            },
        },
        // phone: {
        //     type: String,
        //     maxLength: 10,
        //     required: true,
        //     unique: true,
        // },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const UserModel = new model("User", UserSchema);

export default UserModel;
