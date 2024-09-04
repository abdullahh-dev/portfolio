// components/CustomCursor.js
"use client";
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor") as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      }
    };

    const handleMouseDown = () => {
      cursor?.classList.add("animate-pulse");
    };

    const handleMouseUp = () => {
      cursor?.classList.remove("animate-pulse");
    };
    const handleMouseLeave = () => {
      cursor.style.display = "none";
    };

    const handleMouseEnter = () => {
      cursor.style.display = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className="custom-cursor fixed w-5 h-5 bg-[#ffffff]/5 backdrop-blur-sm border border-[#2a2a2a]  rounded-full z-50
                duration-75"
    ></div>
  );
};

export default CustomCursor;
