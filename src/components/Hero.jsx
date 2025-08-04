import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import profilePic from "../assets/profile.jpg"; // Make sure to place profile.jpg in src/assets/

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-left px-6 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 font-serif">
            Jeswanth Palleti
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl md:max-w-full md:w-[80%] leading-relaxed">
            I’m an aspiring problem solver and a final-year Computer Science
            student at SRM University. I’m proficient in C++ and Python, and
            passionate about solving real-world problems using Machine Learning
            and modern software tools. I’ve built solutions across domains and
            actively participated in various college and national-level
            hackathons.
          </p>
          <div className="flex gap-6 mt-6 text-3xl text-blue-700">
            <a
              href="https://github.com/JeswanthPalleti-01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-900 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jeswanth-palleti-8o55/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-900 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/Jeswanth07/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-900 transition"
            >
              <FaCode />
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Jeswanth"
            className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-blue-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
