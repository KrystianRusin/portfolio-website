import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="content-container">
      <Nav className="nav" />
      <div className="center-content">
        <div className="intro-content">
          <Socials />
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default App;
