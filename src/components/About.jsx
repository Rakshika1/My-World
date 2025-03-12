import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants"; // Make sure this file exists
import { fadeIn, textVariant } from "../utils/motion"; // Check if the utils exist

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.05 }}
      className="p-[2px] bg-gradient-to-r from-[#915EFF] to-[#ff66c4] rounded-[20px] shadow-lg"
    >
      <div className="bg-[#1e1e2e] rounded-[20px] py-6 px-12 flex flex-col items-center">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold mt-4">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="w-full h-full bg-[#050816] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-lg text-gray-400">Introduction</p>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-gray-300 text-lg max-w-3xl mx-auto leading-7 text-center"
        >
          I'm a developer with expertise in **React, Node.js, and modern web
          technologies**. I love solving real-world problems through **code**.
        </motion.p>

        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Remove SectionWrapper for now
export default About;
