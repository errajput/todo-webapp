import { Link, Outlet } from "react-route-dom";

function Layout() {
    return (
        <div>
            <h1>TODO WEBAPP</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/register"}>Register</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
export default Layout;
