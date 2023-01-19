import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      {/* icono de flecha para back */}
      <Link to="/home">Back</Link>
      {/* imagen de Rick con la compu */}
      <img src="#" alt="#" />
      {/* texto en Open*/}
      <p>Aqui va el about </p>
      <Footer />
    </div>
  );
};

export default About;
