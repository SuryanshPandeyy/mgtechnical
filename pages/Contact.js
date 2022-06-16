import { Button, Divider } from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
  };

  const inputStyle = { top: "-1.2rem", fontSize: '1.2rem'};

  return (
    <React.Fragment>
      <div className="contactContainer">
        <Divider className="divider">
          <div className="heading"></div>
          <h1>Contact Us</h1>
        </Divider>
        <form className="contactForm" onSubmit={submitForm}>
          <div className="contactInputContainer">
            <label
              style={name !== "" ? inputStyle : { top: "" }}
              htmlFor="name"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label
              style={contact !== "" ? inputStyle : { top: "" }}
              htmlFor="contact"
            >
              Mobile
            </label>
            <input
              name="contact"
              id="contact"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="contactInputContainer">
            <label
              style={email !== "" ? inputStyle : { top: "" }}
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="contactInputContainer">
            <label
              style={message !== "" ? inputStyle : { top: "" }}
              htmlFor="msg"
            >
              Message
            </label>
            <textarea
              name="msg"
              id="msg"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <Button type="submit" className="send">
            Send
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
