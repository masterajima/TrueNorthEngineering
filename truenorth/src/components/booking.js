import React from "react";
import React, { useState } from "react";

export default function booking() {
  const [selectDate, setSelectDate] = useState();
  const [appointmentDetail, setAppointmentDetail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleDateChange = (event) => {
    setSelectDate(event.target.value);
  };

  const handleInputChange = (event) => {
    setAppointmentDetail({
      ...setAppointmentDetail,
      [event.target.name]: event.target.value,
    });
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(selectDate, appointmentDetail);
      //reset form field
      setSelectDate("");
      setAppointmentDetail({
        name: "",
        email: "",
        message: "",
      });
    };
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          select a Date:
          <input
            type="date"
            value={selectDate}
            onChange={handleDateChange}
          ></input>
        </label>
        <br />
        <label>
          Name
          <input
            type="text"
            name="name"
            value={appointmentDetail.name}
            onChange={handleInputChange}
          ></input>
        </label>
        Email
        <input
          type="email"
          name="email"
          value={appointmentDetail.email}
          onChange={handleInputChange}
        ></input>
        <label />
        <label>
          <input
            type="text"
            name="message"
            value={appointmentDetail.message}
          ></input>
        </label>
        <br />
        <button type="submit">Book Appoinment</button>
      </form>
    </div>
  );
}
