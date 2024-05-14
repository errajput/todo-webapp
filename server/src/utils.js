import jwt from "jsonwebtoken";
import UserModel from "./models/user.model.js";

export const encrypt = (value) => {
    // TODO: add encryption
    return `1${value}2${value}3`;
};

export const createToken = (value) => {
    // NOTE: 1 Hour
    const expiry = Math.floor(Date.now() / 1000) + 60 * 60;
    // TODO: move secret to env
    return jwt.sign({ exp: expiry, data: value }, "secret");
};

export const validateToken = (token) => {
    const value = jwt.verify(token.split("Bearer ")[1], "secret");
    console.log("VV ", value);
    return value?.data;
};

export const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // console.log('Token ', token);
        const value = validateToken(token);
        const userExists = await UserModel.exists({ _id: value });
        if (!userExists) {
            return res.status(403).send({ error: "Invalid Token" });
        }
        req.userId = value;
        return next();
    } catch (error) {
        console.log("Error: checkAuth", error.message);
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).send({ error: "Token Expired" });
        }
        return res.status(400).send({ error: "Invalid Request" });
    }
};
