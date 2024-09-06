"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="p-2 max-w-[750px]">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-7xl text-white pl-2 font-medium tracking-tighter"
        >
          Hi there, I&apos;m Muhammad Abdullah, a Frontend Engineer who loves
          creating beautiful websites.
        </motion.p>
      </div>
    </section>
  );
}
