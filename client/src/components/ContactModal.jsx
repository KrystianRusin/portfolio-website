import "../styles/ContactModal.css";
import React, { useRef } from "react"; // Import useRef

const ContactModal = ({ onClose }) => {
  const formRef = useRef();

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const resetForm = () => {
    formRef.current.reset();
  };

  const handleSubmit = (event) => {
    onClose();
    event.preventDefault();
    fetch("http://localhost:5000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Message Sent.");
          resetForm();
        } else if (data.status === "fail") {
          alert("Message failed to send.");
          onClose();
        }
      });
  };

  return (
    <div className="modal" onClick={onClose}>
      <form
        ref={formRef}
        className="contact-form"
        onClick={stopPropagation}
        onSubmit={handleSubmit}
      >
        <h2>Contact Me!</h2>
        <div className="input-container">
          <label>Name:</label>
          <input type="text" name="name" className="input-text" required />
        </div>
        <div className="input-container">
          <label>Email:</label>
          <input type="email" name="email" className="input-text" required />
        </div>

        <div className="input-container">
          <label>Message:</label>
          <textarea name="message" className="input-text" required />
        </div>
        <div className="input-container">
          <input type="submit" value="Submit" className="submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default ContactModal;
