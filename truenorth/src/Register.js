import React, { useState } from "react";
import axios from "axios";
export const Register = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post("/api/register", {
        email,
        pass,
        confirm,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      setEmail();
      setPass();
      setConfirm();
      setError();
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <label for="name">Full Name</label>
        <input value={name} name="name" placeholder="fullname"></input>
        <br></br>
        <label htmlFor="email" placeholder="youremail@gmail.com">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <br></br>
        <label htmlFor="password" placeholder="********">
          password
        </label>

        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          name="password"
        />
        <br></br>
        <button className="link-btn" type="submit">
          Register
        </button>
      </form>
      <br></br>
      <button className="link-btn" onClick={() => props.onFormSwitch("Login")}>
        Already have account? Login here
      </button>
    </>
  );
};
