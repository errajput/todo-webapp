import { createBrowserRouter } from "react-router-dom";

import MyTodos from "./pages/my-todos";
import Todos from "./pages/todos";
import TodoForm from "./pages/todo-form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MyTodos />,
    },
    {
        path: "/todos",
        element: <Todos />,
    },
    {
        path: "/todos/:id",
        element: <TodoForm />,
    },
]);

export default router;
