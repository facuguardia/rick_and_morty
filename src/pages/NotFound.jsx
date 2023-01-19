import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div>
      <img src="#" alt="#" /> {/* imagen rick fakyou*/}
      <h1>Not Found - 404</h1>
      <p>Algun texto divertido aqui</p>
      <Link to="/">
        <button>BACK TO THE BEGINNING</button>
      </Link>
      <Footer />
    </div>
  );
}

export default NotFound;
