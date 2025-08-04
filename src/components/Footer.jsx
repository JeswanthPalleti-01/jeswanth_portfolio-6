import React from "react";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
      <div className="flex justify-center gap-6 mb-2 text-xl text-blue-600">
        <a
          href="https://github.com/JeswanthPalleti-01"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jeswanth-palleti-8o55/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://leetcode.com/u/Jeswanth07/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-800"
        >
          <FaCode />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Jeswanth Palleti. All rights reserved.</p>
    </footer>
  );
};

export default Footer;