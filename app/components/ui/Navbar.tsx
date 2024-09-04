"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import {
  AddBoxOutlined,
  ContactMail,
  Home,
  SettingsVoiceSharp,
  Work,
} from "@mui/icons-material";

const Navbar = () => {
  const path = usePathname();
  const NavLinks = [
    { id: 1, name: "Home", path: "/", icon: <Home fontSize="large" /> },
    {
      id: 2,
      name: "About",
      path: "/about",
      icon: <AddBoxOutlined fontSize="large" />,
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
      icon: <SettingsVoiceSharp fontSize="large" />,
    },
    {
      id: 4,
      name: "Projects",
      path: "/projects",
      icon: <Work fontSize="large" />,
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
      icon: <ContactMail fontSize="medium" />,
    },
  ];

  return (
    <nav>
      <div
        style={{ WebkitBorderRadius: "12px" }}
        className="bottom-[4%] z-[1000] flex fixed cst-md:hidden flex-col border border-[#151515] p-1 right-[2%] overflow-hidden  backdrop-blur-[2px] rounded-[12px]"
      >
        <div
          className={`transition-height duration-1000 flex flex-col items-center gap-5 overflow-hidden`}
        >
          <div className={`flex flex-col gap-2 items-center h-full`}>
            {NavLinks.map((n, i) => (
              <Link key={n.id} href={n.path}>
                <div
                  className={`transition-all duration-300  ${
                    path === n.path
                      ? "bg-[#252525] backdrop-blur-sm text-[white]"
                      : "text-[#666666]"
                  } flex items-center justify-center text-[14px]  p-[1px]  w-[65px] h-[45px] rounded-[6px]`}
                >
                  {n.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ul className="hidden cst-md:flex flex-col fixed top-56 left-10">
        {NavLinks.map((n, i) => (
          <li
            key={i}
            className="hover:translate-x-2 duration-1000 transition-all ease-in-out"
          >
            <Link
              className={`cursor-none ${
                path === n.path ? "text-white font-medium" : "text-[#666666]"
              }`}
              href={n.path}
            >
              {n.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
