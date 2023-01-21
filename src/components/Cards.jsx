import { Link } from "react-router-dom";

function Cards({ id, name, image }) {
  return (
    <div className="text-center">
      <Link to={`/detail/${id}`}>
        <img
          src={image}
          alt={name}
          className="rounded-full shadow-md border-2 border-tertiary w-40 h-40 mx-auto"
        />
        <div>
          <h1 className="text-3xl text-secondary font-medium inline-block px-4 py-2 leading-none hover:border-transparent hover:text-orange-400 mt-4 lg:mt-0 transition ease-in-outduration-500">
            {name}
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
