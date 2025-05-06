import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../config/axiousInstance";
import Productpage from "../productpage/Products";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../slice/UserSlice";


function LoginPage({set}) {
  const dispatch=useDispatch()

  const [formData, setFormData] = useState({ email: "", password: ""});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      
      console.log("Login successful:", response);
      set(response.user)
      navigate("/Product");
    } catch (err) {
      console.error("Login failed:", err);
      setError(err.response?.data?.error || "Login fa Please try again.");
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-white">
    <form
      className="bg-white shadow-xl rounded p-8 w-full max-w-sm border border-blue-300 space-y-4 "
      onSubmit={handleSubmit}
    >
      
      <h1 className="pl-2  text-center text-blue-600 font-bold">
        The Login Page
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <label className="text-blue-600">E-mail</label>
      <input type="email" name="email" className="border rounded-lg w-full p-2" value={formData.email} onChange={handleChange}  required
      />
      <label className="text-blue-600">Password</label>
      <input type="password" name="password" className="border rounded-lg w-full p-2" value={formData.password} onChange={handleChange} required
      />
      <button
        className=" w-full bg-blue-600 hover:bg-green-600 rounded-lg text-white font-bold px-3 py-1 "
        type="submit"
      >
        Login
      </button>
      <p className="text-blue-600 text-center">
       Create account
      </p>
      <button
        type="button"
        onClick={() => navigate("/Register")}
        className=" w-full bg-blue-600 text-white font-bold  px-3 py-1 rounded-lg"
      >
        Register
      </button>
    </form>
    </div>
  );
}

export default LoginPage;