"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition?.x! - 15,
      y: mousePosition?.y! - 15,
      transition: {
        type: "smooth",
        duration: 0,
      },
    },
  };

  return (
    mousePosition && (
      <motion.div
        style={{ top: 0, left: 0 }}
        variants={variants}
        animate="default"
        className={`${
          visible ? "" : "hidden"
        } fixed custom-cursor opacity-0 md:opacity-100 w-[30px] h-[30px] bg-emerald-100/25 backdrop-blur-sm rounded-full`}
      />
    )
  );
};

export default CustomCursor;
