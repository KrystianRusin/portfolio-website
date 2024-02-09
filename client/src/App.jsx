import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import About from "./components/About";
import Starfield from "react-starfield";

function App() {
  return (
    <div className="content-container">
      <Starfield
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          speedFactor: 0.05,
          zIndex: -1,
        }}
      />
      <Nav className="nav" />
      <div className="main-content">
        <div className="center-content">
          <div className="intro-content">
            <Socials />
            <Intro />
          </div>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
    </div>
  );
}

export default App;
