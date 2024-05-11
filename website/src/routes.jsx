import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import { Todos } from "./pages/Todos";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Todos />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export default router;
