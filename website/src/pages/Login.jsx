import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { isLogin, postData } from "../services/http.service";

export const Login = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    // {type: error | info, detail: string}
    const [message, setMessage] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage(null);
        const data = { email, password };
        console.log("Data", data);

        const response = await postData("auth/login", data);
        console.log("Response ", response);
        if (!response?.error && response?.token) {
            localStorage.setItem("userToken", response.token);
            return navigate("/");
        }
        if (response?.error) {
            setPassword("");
            setMessage({ detail: response.error, type: "error" });
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
                {message && (
                    <p
                        style={{
                            color: message.type === "error" ? "red" : "green",
                        }}
                    >
                        {message.detail}
                    </p>
                )}
                <p>
                    <label>
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            required
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
                            required
                            onChange={handlePasswordChange}
                        />
                    </label>
                </p>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
