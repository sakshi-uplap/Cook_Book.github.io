import React from "react";
import Connect from "../assets/connect.jpg";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Connect})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Please enter  name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Please enter email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="8"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;