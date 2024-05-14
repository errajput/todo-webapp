import React from "react";

export const Register = () => {
    return (
        <>
            <div className="form">
                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            id="name"
                            name="name"
                            maxlength="20"
                            minlength="5"
                        />
                    </label>

                    <br />
                    <label>
                        Email:
                        <input type="text" id="email" name="email" />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" id="password" name="password" />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};
