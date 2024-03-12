import MiddasLogo from "../ui/middaslogo";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

const NavBar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-start justify-start rounded-md bg-middasdarkgreen p-4 md:h-32"
        to="/"
      >
        <div className="w-32 text-white md:w-40">
          <MiddasLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <Navigation />
      </div>
    </div>
  );
};

export default NavBar;
