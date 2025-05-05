import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../config/axiousInstance";

function RegistrationPage() {
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(formData);
      console.log("User registered successfully:", response);

    } catch (err) {
      console.error("Registration failed:", err);
      setError(err.response?.data?.error || "Registration failed. Please try again.");
    }
    setFormData({email: "", password: ""})
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
    <form
      className="bg-white shadow-xl rounded p-8 w-full max-w-sm border border-blue-300 space-y-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-blue-600 font-bold">
        The Registration Page
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <label className="text-blue-600">E-mail</label>
      <input
        type="email"
        name="email"
        className="border rounded-lg w-full p-2"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label className="text-blue-600">Password</label>
      <input
        type="password"
        name="password"
        className="border rounded-lg w-full p-2"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <label for="role" className="text-blue-600">Role</label>
      <select name="role" id="role" className="border rounded-lg w-full p-2" value={formData.role} onChange={handleChange}>
           <option value="User">User</option>
           <option value="Admin">Admin</option>
           <option value="company">company</option>
        </select>
      <button
        className=" w-full bg-blue-600 hover:bg-green-600 rounded-lg text-white font-bold px-3 py-1"
        type="submit"
      >
        Submit
      </button>
      <p className="text-blue-600  text-center">Return to login</p>
      <button
        type="button"
        onClick={() => navigate("/")}
        className=" w-full bg-blue-600  rounded-lg text-white font-bold px-3 py-1"
      >
        Login
      </button>
    </form>
    </div>
  );
}

export default RegistrationPage;