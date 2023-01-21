import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center text-white px-2 py-6">
      <div>
        <small>&copy; 2023 Facu Guardia</small>
      </div>
      <div className="flex gap-4 text-3xl">
        <a
          href="https://github.com/facuguardia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-all"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/facundo-guardia/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-all"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
