export const API_URL = "http://localhost:8000/";

export const getData = async (path) => {
    const userToken = localStorage.getItem("userToken");
    const options = {};
    if (userToken) {
        options.headers = new Headers({ Authorization: `Bearer ${userToken}` });
    }

    const response = await fetch(`${API_URL}${path}`, options);
    return await response.json();
};

export const postData = async (path, data) => {
    try {
        const userToken = localStorage.getItem("userToken");
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({ "content-type": "application/json" }),
        };
        if (userToken) {
            options.headers = new Headers({
                "content-type": "application/json",
                Authorization: `Bearer ${userToken}`,
            });
        }

        const response = await fetch(`${API_URL}${path}`, options);
        return await response.json();
    } catch (error) {
        return { error: "Server down, try after some time." };
    }
};

export const updateData = async (path, data) => {
    const userToken = localStorage.getItem("userToken");
    const options = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: new Headers({ "content-type": "application/json" }),
    };
    if (userToken) {
        options.headers = new Headers({
            "content-type": "application/json",
            Authorization: `Bearer ${userToken}`,
        });
    }
    const response = await fetch(`${API_URL}${path}`, options);
    return await response.json();
};

export const deleteData = async (path) => {
    const userToken = localStorage.getItem("userToken");
    const options = {
        method: "DELETE",
    };
    if (userToken) {
        options.headers = new Headers({
            "content-type": "application/json",
            Authorization: `Bearer ${userToken}`,
        });
    }
    const response = await fetch(`${API_URL}${path}`, options);
    return await response.json();
};
// user login with specified keyname
export const isLogin = () => {
    return !!localStorage.getItem("userToken");
};
// when user logout then all data is clear which is locally store
export const logoutUser = () => {
    localStorage.clear();
};
