import React from "react";
import { motion } from "framer-motion";
import "../styles/SkillText.css"; // Import the new CSS file

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 0.5, delay: 0.5 }}
        className="text-30px"
      >
        Making apps with modern technologies
      </motion.div>
    </div>
  );
};

export default SkillText;
