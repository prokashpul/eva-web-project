import React, { useState } from "react";
import { FireIcon, MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import Links from "../LInks/Links";
const Navmenu = () => {
  const [menuOpen, setMenu] = useState(true);
  const menuLink = [
    { name: "Home", link: "/", id: 1 },
    { name: "Shop", link: "shop", id: 1 },
    { name: "About", link: "/about", id: 1 },
    { name: "Product", link: "/product", id: 1 },
    { name: "contact", link: "/contact", id: 1 },
  ];
  return (
    <nav className="bg-slate-400 fixed top-0 w-full  md:h-20 md:flex justify-between items-center md:px-20">
      <div className="flex z-10 md:static w-full items-center justify-between py-4">
        <div className="flex items-center">
          <FireIcon className="w-12 mr-2 text-cyan-500"></FireIcon>{" "}
          <span className="font-mono font-bold text-5xl">EvaWab</span>
        </div>
        <div className="menu-bar" onClick={() => setMenu(!menuOpen)}>
          {menuOpen ? (
            <MenuAlt2Icon className="w-8 mr-2 md:hidden"></MenuAlt2Icon>
          ) : (
            <XIcon className="w-8 mr-2 md:hidden"></XIcon>
          )}
        </div>
      </div>
      <ul
        className={`z-1 md:z-0 absolute md:static bg-zinc-500 md:bg-transparent py-10 md:py-0 text-center   w-full md:w-auto md:flex gap-4 transition-all duration-500  ${
          !menuOpen
            ? "left-0 opacity-100 z-10"
            : "left-[-400px] opacity-0 md:opacity-100"
        }`}
      >
        {menuLink.map((link) => (
          <Links link={link} key={link.id}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navmenu;
