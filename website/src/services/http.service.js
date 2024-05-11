export const API_URL = "http://localhost:8000/";

export const getData = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

export const saveData = async (url, data) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "content-type": "application/json" }),
    });
    return await response.json();
};
