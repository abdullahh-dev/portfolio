"use client";

import { useEffect, useState } from "react";

const About = () => {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    setRevealed(true);
  }, []);

  const text = `a pakistan based full Stack Developer specialized in
Frontend development. Im a Computer Science graduate from NUST. I
have a passion for developing user-friendly and eye-catching websites
that promote creativity. My journey into coding began with a
curiosity that evolved into profound expertise in ReactJS. From
sleek user interfaces to interactive components, I thrive on the
challenge of making every click, scroll, and interaction a delightful
experience.`;
  const words = text.split("");

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="max-w-[500px]">
        {words.map((word, index) => (
          <span
            key={index}
            className={`transition-all text-[#666666] font-medium tracking-tighter leading-tight duration-75 linear ${
              revealed && `text-white`
            }    `}
            style={{
              transitionDelay: `${index * 40}ms`,
            }}
          >
            {word.toLowerCase()}
          </span>
        ))}
        <p className="tracking-tighter text-[#666666] leading-tight font-medium"></p>
      </div>
    </section>
  );
};

export default About;
