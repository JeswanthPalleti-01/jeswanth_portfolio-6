// src/components/Skills.jsx
import React from "react";

const skills = {
  Languages: ["C", "C++", "Python", "SQL"],
  "Frameworks": [
    "Flask",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn"
  ],
  "Developer Tools": ["VS Code", "Jupyter Lab", "Google Colab", "Kaggle"],
  Strengths: [
    "OOPS Concepts",
    "Data Structures & Algorithms",
    "Problem Solving",
    "Active Listening"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 to-white text-center font-sans">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-14 tracking-wide">Skills</h2>
      <div className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="bg-white border border-blue-100 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-blue-100">
              {category}
            </h3>
            <ul className="text-gray-700 text-sm leading-relaxed space-y-2 text-left">
              {items.map((item, index) => (
                <li key={index} className="pl-4 relative">
                  <span className="absolute left-0 text-blue-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
