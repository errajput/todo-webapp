import { Schema, model } from "mongoose";
import validator from "validator";

/**crete user schema with validator also with timestamps
 */
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
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
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
// crete new obj which store data of user
const UserModel = new model("User", UserSchema);

export default UserModel;
