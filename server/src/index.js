import { config } from "dotenv";
config({ path: "development.env" });

import express from "express";
import { connect } from "mongoose";
import cors from "cors";

import TodoRouter from "./routes/todo.routes.js";
import AuthRoutes from "./routes/auth.routes.js";
import UserRoutes from "./routes/user.routes.js";

// NOTE: IIFE - Immediately Invoked Function Expressions
(async () => {
    await connect(process.env.MONGODB_URI, { dbName: "todo-webapp" });
    console.log("[MongoDB] DB Connected");

    const app = express();
    const port = 8000;

    app.use(cors());
    app.use(express.json());
    app.get("/", (req, res) => res.send({ message: "Ok" }));
    app.use("/todos", TodoRouter);
    app.use("/auth", AuthRoutes);
    app.use("/users", UserRoutes);

    app.listen(port, () => console.log(`[Server] Listening on Port ${port}`));
})();
