export const API_URL = "http://localhost:8000/";

export const getData = async (path) => {
    const response = await fetch(`${API_URL}${path}`);
    return await response.json();
};

export const saveData = async (path, data) => {
    const response = await fetch(`${API_URL}${path}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "content-type": "application/json" }),
    });
    return await response.json();
};

export const updateData = async (path, data) => {
    const response = await fetch(`${API_URL}${path}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: new Headers({ "content-type": "application/json" }),
    });
    return await response.json();
};

export const deleteData = async (path) => {
    const response = await fetch(`${API_URL}${path}`, {
        method: "DELETE",
    });
    return await response.json();
};
