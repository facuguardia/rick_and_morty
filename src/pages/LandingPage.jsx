import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-landing w- h-screen bg-no-repeat bg-center bg-primary relative ">
      <div>
        <button className="bg-tertiary/80 absolute bottom-10 right-1/3 left-1/3 py-2 px-8 rounded-full hover:bg-tertiary/60">
          <Link to="/home" className="text-xl text-white font-medium">Live the experience</Link>
        </button>
      </div>
    </div>
  );
}

export default Landing;
