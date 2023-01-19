import { Link } from "react-router-dom";

function Cards({ id, name, gender, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <Link to={`/detail/${id}`}ñ>
        <h1>{name}</h1>
      </Link>
      <p>{gender}</p>
    </div>
  );
}

export default Cards;

