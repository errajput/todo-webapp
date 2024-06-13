import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import { Todos } from "./pages/Todos";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

// proving the path of layout page, todo page, register page and login page
// layout page is root page then we go other page which we need to go
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
