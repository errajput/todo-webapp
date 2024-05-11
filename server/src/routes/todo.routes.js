import { Router } from "express";
import { TodoModel } from "../models/todo.model.js";

const router = Router();

// 1 - POST - / - Create a Todo
router.post("/", async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).send({ error: "Title is Required" });
    }

    await TodoModel.create({ title });
    return res.status(201).send({ message: "Todo Created" });
});

// 2 - GET - / - Get all todos
router.get("/", async (req, res) => {
    const todos = await TodoModel.find({});
    res.send({ status: true, data: todos });
});

// 3 - GET      - /:id  - Get 1 Todo
router.get("/:id", async (req, res) => {
    const todo = await TodoModel.findOne({ _id: req.params.id });
    res.send({ status: true, data: todo });
});

// 4 - PATCH    - /:id  - Update 1 Todo
router.patch("/:id", async (req, res) => {
    const { isDone } = req.body;
    await TodoModel.updateOne({ _id: req.params.id }, { isDone });
    res.send({ status: true, message: "Todo Updated" });
});

// 5 - DELETE   - /:id  - Delete 1 Todo
router.delete("/:id", async (req, res) => {
    await TodoModel.deleteOne({ _id: req.params.id });
    res.send({ status: true, message: "Todo Deleted" });
});

export default router;
