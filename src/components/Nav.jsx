import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div>
        {/* Logo */}
        <img src="#" alt="#" />
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/home">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
