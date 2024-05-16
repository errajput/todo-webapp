import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isLogin, postData } from "../services/http.service";

export const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password };
        console.log("Data", data);

        const response = await postData("auth/login", data);
        console.log("Response ", response);
        if (!response.error && response.token) {
            localStorage.setItem("userToken", response.token);
            return navigate("/");
        }
    };

    useEffect(() => {
        if (isLogin()) {
            return navigate("/");
        }
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <p>
                    <label>
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Password:
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                </p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
