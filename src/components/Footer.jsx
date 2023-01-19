import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <small>&copy; 2023 Facu Guardia</small>
      </div>
      <div>
        <a
          href="https://github.com/facuguardia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-guardia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
