import { config } from "dotenv";
config({ path: "development.env" });

import express from "express";
import { connect } from "mongoose";

import TodoRouter from "./routes/todo.routes.js";

(async () => {
    console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);
    await connect(process.env.MONGODB_URI, { dbName: "todo-webapp" });
    console.log("[MongoDB] DB Connected");

    const app = express();
    const port = 8000;

    app.get("/", (req, res) => res.send({ message: "Ok" }));
    app.use("/todos", TodoRouter);

    app.listen(port, () => console.log(`[Server] Listening on Port ${port}`));
})();
