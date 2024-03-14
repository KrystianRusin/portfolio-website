import { useState } from "react";
import Socials from "./Socials";
import "../styles/Nav.css";

const Nav = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-name-header">
        <h3 className="nav-title">Krystian Rusin</h3>
      </div>
      <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`nav-routes ${isOpen ? "open" : ""}`}>
        <a href="#main">
          <h4>About Me</h4>
        </a>
        <a href="#skills">
          <h4>Skills</h4>
        </a>
        <a href="#projects">
          <h4>Projects</h4>
        </a>
        {/*} <button className="nav-contact desktop" onClick={openModal}>
          Contact Me
        </button>
        <button className="nav-contact mobile" onClick={openModal}>
          Contact Me
        </button>*/}
      </div>
      <Socials />
    </div>
  );
};

export default Nav;
