import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login(email, password);
            localStorage.setItem("token", res.data.token);
            navigate("/products");
        } catch (error) {
            alert("Login failed!");
        }
    };

    return (
        <div className="flex flex-col items-center mt-20">
            <h2 className="text-2xl">Login</h2>
            <form onSubmit={handleLogin} className="w-1/3">
                <input type="email" placeholder="Email" className="border p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="border p-2 w-full mt-2" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full mt-2">Login</button>
            </form>
        </div>
    );
};

export default Login;
