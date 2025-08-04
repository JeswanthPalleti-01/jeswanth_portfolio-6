import React from "react";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf"; // 👈 import it

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md py-4 text-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Jeswanth Palleti</h1>
        <div className="space-x-6">
          {["education", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-600 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* 👇 Use the imported resume file here */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
