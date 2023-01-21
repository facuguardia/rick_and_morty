import { Link } from "react-router-dom";
import Logo from "../assets/rick-and-morty-31015.png";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <div className="">
        <Link to="/">
          <img src={Logo} alt="Logo de Rick and Morty" className="w-50 h-20" />
        </Link>
      </div>
      <div className=" flex gap-4 text-2xl font-bold text-tertiary cursor-pointer">
        <Link to="/about" className="hover:text-orange-400 transition-all">
          About
        </Link>
        <Link to="/contact" className="hover:text-orange-400 transition-all">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
