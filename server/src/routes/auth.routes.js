import { Router } from "express";
import UserModel from "../models/user.model.js";

import { createToken, encrypt } from "./../utils.js";

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = UserModel({
            name,
            email,
            password: encrypt(password),
        });

        await user.save();

        return res.status(201).send({ message: "User Saved" });
    } catch (error) {
        console.log("Error ", error.message);
        return res.status(400).send({ error: "Invalid Request" });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne(
            { email, password: encrypt(password) },
            "-__v -password"
        );

        if (user) {
            return res.send({ token: createToken(user._id) });
        } else {
            return res.status(400).send({ error: "Invalid Credentials" });
        }
    } catch (error) {
        console.log("Error ", error.message);
        return res.status(400).send({ error: "Invalid Request" });
    }
});

export default router;
