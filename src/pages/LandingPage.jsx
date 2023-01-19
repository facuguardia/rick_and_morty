import { Link } from "react-router-dom";

function Landing() {
  return (
    // la imagen de fondo va a ser un bg de tailwind
    <div>
      <button>
        <Link to="/home">Click</Link>
      </button>
    </div>
  );
}

export default Landing;
