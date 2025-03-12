import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="p-[2px] bg-gradient-to-br from-[#ff8a00] via-[#e52e71] to-[#5d00ff] rounded-[20px] shadow-2xl"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="bg-[#1e1e2e] rounded-[20px] py-6 px-12 flex flex-col items-center"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold mt-4">{title}</h3>
      </motion.div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section className="relative w-full h-full py-20">
      {/* 🔥 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020024] via-[#090979] to-[#00d4ff] animate-gradientBlur"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div variants={textVariant()} className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-300"
          >
            🚀 Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold text-white"
          >
            About Me
          </motion.h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
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

export default About;
