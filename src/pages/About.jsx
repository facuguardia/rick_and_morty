import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../components/Footer";
import Rick from "../assets/about-1.jpg";

const About = () => {
  return (
    <div className="bg-primary">
      <div className="flex items-center p-4 gap-2 text-2xl text-tertiary font-bold">
        <BsArrowLeft />
        <Link to="/home"> Back</Link>
      </div>
      <div className="flex flex-row-reverse justify-between items-center ">
        <img
          src={Rick}
          alt="Rick abrazando un monitor de los años 90 con el brazo izquierdo"
        />
        <p className="text-gray-100 text-xl pl-8">
          ¡Bienvenido al mundo de Rick and Morty! Esta serie animada de ciencia
          ficción es conocida por su humor negro y su ingenio, y ha ganado
          millones de fans en todo el mundo. La historia sigue a un científico
          loco llamado Rick Sanchez y su nieto Morty Smith mientras viajan a
          través de dimensiones alternativas, encuentran aves alienígenas y se
          enfrentan a sus propios demonios internos.
          <br />
          <br />
          Cada episodio es una mezcla
          de aventura, comedia y reflexión filosófica, y no hay nada más
          emocionante que ver cómo Rick y Morty se meten en problemas y luego
          tratan de salir de ellos. ¡Prepárate para reír, llorar y cuestionar tu
          existencia mientras te sumerges en el caótico universo de esta serie!{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
