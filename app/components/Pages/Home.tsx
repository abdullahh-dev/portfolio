import React from "react";
import { motion } from "framer-motion";
import CustomContainer from "../ui/Container";
const HomePage = () => {
  return (
    <CustomContainer>
      <div className="max-w-[800px] min-h-screen">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl text-white pl-2 font-medium tracking-tighter"
        >
          Hi there, I&apos;m Muhammad Abdullah, a{" "}
          <span className="text-emerald-600">Frontend Engineer</span> who loves
          creating beautiful websites.
        </motion.p>
      </div>
    </CustomContainer>
  );
};

export default HomePage;
