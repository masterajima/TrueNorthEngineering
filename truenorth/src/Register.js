import React, { useState } from "react";
export const Register = (props) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
