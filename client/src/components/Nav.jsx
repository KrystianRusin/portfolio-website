import "../styles/Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <a href="">
        <h2 className="nav-title">Krystian Rusin</h2>
      </a>
      <div className="nav-routes">
        <a href="">
          <h3>About Me</h3>
        </a>
        <a href="">
          <h3>Skills</h3>
        </a>
        <a href="">
          <h3>Projects</h3>
        </a>
      </div>
      <button className="nav-contact"> Contact Me</button>
    </div>
  );
};

export default Nav;
