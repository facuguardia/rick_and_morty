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
    <div className="bg-primary">
      <div>
        <Nav />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {characters.map((character) => (
          <Cards
            key={character?.id}
            id={character?.id}
            name={character?.name}
            image={character?.image}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
