import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin, postData } from "../services/http.service";

/**
 * creating a register function and set id and value using with useState method
 */
export const Register = () => {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
    });
    /**use event handler to handle name field,
     * email field and password field
     */
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
                            required
                            onChange={(e) => handleInputChange(e, "name")}
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="email">
                        Email:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            onChange={(e) => handleInputChange(e, "email")}
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
                            required
                            onChange={(e) => handleInputChange(e, "password")}
                        />
                    </label>
                </p>

                <input type="submit" value="Register" />
            </form>
        </div>
    );
};
