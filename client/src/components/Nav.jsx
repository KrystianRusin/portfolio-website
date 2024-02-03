import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <a href="">
        <h3 className="nav-title">Krystian Rusin</h3>
      </a>
      <div className="nav-routes">
        <a href="#about">
          <h4>About Me</h4>
        </a>
        <a href="">
          <h4>Skills</h4>
        </a>
        <a href="">
          <h4>Projects</h4>
        </a>
      </div>
      <button className="nav-contact"> Contact Me</button>
    </div>
  );
};

export default Nav;
