import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../redux/actions";
import Cards from "../components/Cards";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Home() {

  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div>
      <Nav />
      <h1>Characters</h1>
      {
        characters.map((character) => (
          <Cards
            key={character?.id}
            id={character?.id}
            name={character?.name}
            gender={character?.gender}
            image={character?.image}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default Home;