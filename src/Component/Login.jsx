import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Api/api";
import { setAuthToken } from "../Utils/Auth";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser({ email, password });
      setAuthToken(token);
      navigate("/users");
    } catch (error) {
      setError(error.error || "Login is failed");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-8">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-1.5 text-2xl">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              required
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label className="block mb-1.5 text-2xl">Password</label>
            <input
              type="password"
              placeholder="Enter your Email"
              required
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded  cursor-pointer text-2xl hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
