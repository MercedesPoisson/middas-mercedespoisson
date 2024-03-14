import { IoBookOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const links = [
  { name: "Ver Libros", href: "/", icon: <IoBookOutline /> },
  { name: "Crear Libro", href: "/crear", icon: <HiOutlineFolderPlus /> },
  { name: "Favoritos", href: "/favoritos", icon: <IoHeartOutline /> },
];

const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            to={link.href}
            className={classNames(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-lg font-medium hover:bg-middassoftgreen hover:text-middasnotblack md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-middassoftgreen text-middasdarkgreen":
                  pathname === link.href,
              }
            )}
          >
            {link.icon}
            <p className="text-base hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
