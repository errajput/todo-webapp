import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send({
        status: true,
        data: [
            { title: "Learn ReactJS" },
            { title: "Learn Express" },
            { title: "Make Projects" },
        ],
    });
});

export default router;
