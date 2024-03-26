import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Socials.css";

const Socials = () => {
  return (
    <div className="intro-socials">
      <a
        href="https://github.com/KrystianRusin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon fontSize="large" />
      </a>
      <a
        href="https://www.linkedin.com/in/krystian-rusin-83b5b4186/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon fontSize="large" />
      </a>
    </div>
  );
};

export default Socials;
