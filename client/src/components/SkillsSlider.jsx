import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/skillsSlider.css";
import ReactIcon from "../assets/react.svg";
import NodeIcon from "../assets/node.svg";
import MongoIcon from "../assets/mongo.svg";
import PythonIcon from "../assets/python.svg";
import TensorFlowIcon from "../assets/tensorflow.svg";
import TailwindCssIcon from "../assets/tailwindcss.svg";

const SkillsCarousel = () => {
  const skills = [
    { id: 1, icon: ReactIcon },
    { id: 2, icon: NodeIcon },
    { id: 3, icon: MongoIcon },
    { id: 4, icon: TailwindCssIcon },
    { id: 5, icon: PythonIcon },
    { id: 6, icon: TensorFlowIcon },
    // Add more skills here...
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const responsive = {
    0: { items: 1 },
    1024: { items: 5 },
  };

  return (
    <div className="slider-container">
      <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval={1000}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        items={skills.map((skill) => (
          <div
            key={skill.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={skill.icon} alt="skill" className="skill-icon" />
          </div>
        ))}
      />
    </div>
  );
};

export default SkillsCarousel;
