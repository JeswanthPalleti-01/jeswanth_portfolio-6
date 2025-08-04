import React from "react";
import { motion } from "framer-motion";

const skillGroups = {
  Languages: ["C", "C++", "Python", "HTML", "CSS", "JavaScript", "SQL"],
  Frameworks: [
    "Flask",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "TensorFlow",
    "OpenCV",
    "Scikit-learn",
  ],
  Tools: ["VS Code", "Jupyter Lab", "Google Collab", "Kaggle"],
  Strengths: [
    "OOPS Concepts",
    "Data Structures & Algorithms",
    "Problem Solving",
    "Active Listening",
    "Leadership",
  ],
};

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 mb-10"
        >
          I’m a final-year Computer Science student at SRM University with a
          passion for solving real-world problems through code. I love building
          intelligent web applications using C++, Python, Flask, and Machine
          Learning libraries. Over the years, I’ve participated in multiple
          national-level hackathons and contributed to projects ranging from
          research tools to smart logistics systems.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {Object.entries(skillGroups).map(([group, items], idx) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-sm border"
            >
              <h4 className="font-semibold text-blue-700 mb-3">{group}</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                {items.map((skill) => (
                  <li key={skill} className="before:content-['•'] before:mr-2">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;