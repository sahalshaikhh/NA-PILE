// ContactForm.js
import React, { useState } from "react";
import "./ContactForm.css"; // Import your CSS file
import { Button } from "@mui/material";
import {
  EmailOutlined,
  MessageOutlined,
  PersonPinOutlined,
} from "@mui/icons-material";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const SubmitBtnHandle = () => {
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request with Axios
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formData
      );

      // Handle the response, if needed
      console.log("Response from server:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-form-container cursor-pointer">
      <form onSubmit={handleSubmit} className="contact-form" method="post">
        <div className="form-group">
          <label htmlFor="name">
            Full Name <PersonPinOutlined />:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <EmailOutlined />:{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message <MessageOutlined />:{" "}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <Button
          variant="outlined"
          type="submit"
          className="Submit-btn"
          sx={{
            border: "1px solid white",
            color: "#fefefe",
            paddingInline: "4rem",
            margin: "auto",
          }}
          onClick={SubmitBtnHandle}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
