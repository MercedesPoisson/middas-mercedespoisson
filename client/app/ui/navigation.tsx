"use client";
import { IoHomeOutline, IoBookOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const links = [
  { name: "Home", href: "/", icon: <IoHomeOutline /> },
  { name: "Libros", href: "/libros", icon: <IoBookOutline /> },
  { name: "Crear", href: "/crear", icon: <HiOutlineFolderPlus /> },
  { name: "Favoritos", href: "/favoritos", icon: <IoHeartOutline /> },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={classNames(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-middasgray hover:text-middasnotblack md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-middasyellow text-middasdarkgreen": pathname === link.href,
              }
            )}
          >
            {link.icon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
