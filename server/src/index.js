import { config } from "dotenv";
config({ path: "development.env" });

import express from "express";
import { connect } from "mongoose";

import TodoRouter from "./routes/todo.routes.js";

(async () => {
    await connect(process.env.MONGODB_URI, { dbName: "todo-webapp" });
    console.log("[MongoDB] DB Connected");

    const app = express();
    const port = 8000;

    app.use(express.json());
    app.get("/", (req, res) => res.send({ message: "Ok" }));
    app.use("/todos", TodoRouter);

    app.listen(port, () => console.log(`[Server] Listening on Port ${port}`));
})();
