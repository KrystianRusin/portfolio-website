import React from "react";
import "../styles/Blackhole.css";

const Blackhole = () => {
  return (
    <div className="blackhole-container">
      <video autoPlay muted loop className="blackhole-video">
        {" "}
        <source src="blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Blackhole;
