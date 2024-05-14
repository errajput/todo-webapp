import { Link, Outlet, useNavigate } from "react-router-dom";
import { isLogin, logoutUser } from "../services/http.service";

function Layout() {
    const navigate = useNavigate();
    const logout = () => {
        logoutUser();
        return navigate("/login");
    };
    return (
        <div>
            <h1>Todo WebApp</h1>
            <nav>
                <ul>
                    {isLogin() ? (
                        <>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to={"/login"}>Login</Link>
                            </li>
                            <li>
                                <Link to={"/register"}>Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;
