"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const Navbar = () => {
  const path = usePathname();
  const NavLinks = [
    { id: 1, name: "Home", path: "/" },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Projects",
      path: "/projects",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        draggable
        whileDrag={{ scale: 1.2, animation: "step-end" }}
        style={{ WebkitBorderRadius: "12px" }}
        className="bottom-[4%] z-[1000] flex fixed cst-md:hidden flex-col border border-[#151515] p-1 right-[2%] overflow-hidden  backdrop-blur-[12px] rounded-[12px]"
      >
        <div
          className={`transition-height duration-1000 flex flex-col items-center gap-5 overflow-hidden`}
        >
          <div className={`flex flex-col gap-2 items-center h-full`}>
            {NavLinks.map((n, i) => (
              <Link key={n.id} href={n.path}>
                <div
                  className={`${
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
      </motion.div>
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
