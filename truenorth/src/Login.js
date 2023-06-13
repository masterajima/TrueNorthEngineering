import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      const { token } = response.data;
      //store token
      localStorage.setItem("token", token);

      //clear input
      setEmail("");
      setPassword("");
      setError("");
    } catch (e) {
      setError(e.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} />
      <div className="grid grid-col-l sm:grid-col-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-white p-4">
            <h2 className="text-4xl font-bold text-center py-6">natural</h2>
            {error && <div className="error">{error}</div>}
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                className="border p-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                className="border p-2"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button
                type="submit"
                className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500"
              >
                Sign In
              </button>
              <div className="flex justify-between">
                <p className="flex items-center ">
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Create Account</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
