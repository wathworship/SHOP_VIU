import axios from "axios";

const API_URL = "http://localhost:3000"; // เปลี่ยนเป็น URL ของ API Server

export const login = async (email, password) => {
    return axios.post(`${API_URL}/login`, { email, password });
};

const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await login(email, password);
        console.log("Login Success:", res.data); // Debug
        localStorage.setItem("token", res.data.token);
        navigate("/products");
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message); // Debug
        alert("Login failed! Check console for details.");
    }
};


export const getProducts = async (token) => {
    return axios.get(`${API_URL}/products`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

export const addProduct = async (token, product) => {
    return axios.post(`${API_URL}/products`, product, {
        headers: { Authorization: `Bearer ${token}` },
    });
};
