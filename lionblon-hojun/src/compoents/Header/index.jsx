import { Link } from "react-router-dom";
import lion from "../../assets/images/lion.jpeg";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full gap-5 bg-black px-5 py-2.5 h-20">
      <Link to="/" className="flex flex-row items-center gap-5">
        <img src={lion} alt="lion" className="max-h-16 rounded-full" />
        <div className="text-white text-xl">SNULION BLOG</div>
      </Link>
      <div className="flex">
        <div className="mr-10 p-3 uppercase text-lg">
          <Link to="/signin" className="mr-10 p-3 uppercase text-lg">
            sign in
          </Link>
        </div>
        <Link to="/signup" className="mr-10 p-3 uppercase text-lg">
          sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
