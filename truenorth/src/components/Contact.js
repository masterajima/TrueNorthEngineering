import React from "react";

export default function Contact() {
  const [name, setName] = useState();
  const [email, setEamil] = useState();
  const [message, setMessage] = useStaet();
  const handleSubmit = (e) => {
    e.preventDefault();
    setName();
    setEamil();
    setMessage();
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
      </form>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
