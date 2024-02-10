import "../styles/ContactModal.css";

const ContactModal = ({ onClose }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" onClick={onClose}>
      <form className="contact-form" onClick={stopPropagation}>
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
