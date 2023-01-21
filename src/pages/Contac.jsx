import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <div>
        <Link to="/home">
          {" "}
          <BsArrowLeft /> Back
        </Link>
      </div>
      <h1>Contact</h1>
      <Footer />
    </div>
  );
};

export default Contact;