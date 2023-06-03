import React, { useState } from "react";
export const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form>
        <label for="email" placeholder="youremail@gmail.com">
          Email
        </label>
        <input type="email" value={email} name="email" />
        <br />
        <br></br>
        <label for="password" placeholder="********">
          password
        </label>
        <input type="password" value={pass} name="password" />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};
