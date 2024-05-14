import React, { useState } from "react";
import { postData } from "../services/http.service";

export const Login = () => {
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
        const data = {
            email,
            password,
        };
        console.log("Data", data);

        const response = await postData("auth/login", data);
        console.log("Response ", response);
        if (response.token) {
            localStorage.setItem("userToken", response.token);
        }
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
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
                    <br />
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
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    );
};
