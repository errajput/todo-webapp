import { createBrowserRouter } from "react-router-dom";

import Layout from "../../website/src/components/Layout";

import { Todos } from "../../website/src/pages/Todos";
import { Register } from "../../website/src/pages/Register";
import { Login } from "../../website/src/pages/Login";

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
