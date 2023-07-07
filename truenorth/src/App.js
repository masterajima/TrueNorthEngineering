import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./Login";

import Navbar from "./components/Navbar";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bookingStatus, setBookingStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/book", {
        method: "POST",
        headers: {
          ContentType: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.success) {
        setBookingStatus("Massage booked successfully");
      }
    } catch (error) {
      console.log("Error", error);
      setBookingStatus("Failed to book massage");
    }
  };
  //require database connection

  //execute database connection
  return (
    <Navbar>
      <Router />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <Link to="/programms"></Link>
        </li>
      </ul>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/booking"></Route>
      </Switch>
      <Login />
      <h1>Message Booking</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Book Message</button>
      </form>
      {bookingStatus && <p>{bookingStatus}</p>}
    </Navbar>
  );
}

export default App;
