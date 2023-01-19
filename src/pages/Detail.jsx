import { getCharacterDetails, cleanCharacters } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const characterDetails = useSelector((state) => state.characterDetails);

  useEffect(() => {
    dispatch(getCharacterDetails(id));
    return () => {
      dispatch(cleanCharacters());
    };
  }, []);

  return (
    <div>
      <div>
        <img src={characterDetails?.image} alt={characterDetails?.name} />
      </div>
      <div>
        <Link to="/home">Back</Link>
        <label>Name:</label>
        <h1>{characterDetails?.name}</h1>
        <label>Status:</label>
        <p>{characterDetails?.status}</p>
        <label>Species:</label>
        <p>{characterDetails?.gender}</p>
        <label>Origin:</label>
        <p>{characterDetails?.origin?.name}</p>
      </div>

      <Footer />
    </div>
  );
}

export default Detail;
