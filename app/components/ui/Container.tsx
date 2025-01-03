import React from "react";

const CustomContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-center items-center px-4 min-h-screen">
      {children}
    </section>
  );
};

export default CustomContainer;
