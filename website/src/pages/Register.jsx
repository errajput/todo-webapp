import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin, postData } from "../services/http.service";

export const Register = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e, fieldName) => {
        setRegisterData({
            ...registerData,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Data", registerData);

        const response = await postData("auth/register", registerData);

        console.log("Register Response ", response);
        if (!response.error) {
            return navigate("/login");
        }
    };

    useEffect(() => {
        if (isLogin()) {
            return navigate("/");
        }
    }, []);

    return (
        <div>
            <h1>Register</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">
                        Name:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            maxLength="20"
                            minLength="5"
                            onChange={(e) => handleInputChange(e, "name")}
                        />
                    </label>
                </p>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => handleInputChange(e, "email")}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => handleInputChange(e, "password")}
                    />
                </label>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};
