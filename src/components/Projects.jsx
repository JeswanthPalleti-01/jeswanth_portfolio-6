import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Courier Routing System",
    description:
      "Automated optimal route planning for courier deliveries using A*, Dijkstra, and TSP-like logic with Google Distance Matrix API.",
    tech: "Flask, Google Maps API, JS, HTML, CSS",
    link: "https://github.com/JeswanthPalleti-01/smart-courier-routing",
  },
  {
    title: "Research Paper Recommender",
    description:
      "Web app that recommends research papers using Sentence Transformers and arXiv API for relevance-based querying.",
    tech: "Flask, arXiv API, HuggingFace, JS",
    link: "https://github.com/JeswanthPalleti-01/research-recommender",
  },
  {
    title: "Receipt Categorization & Extraction",
    description:
      "App that extracts and classifies merchant data from scanned receipts using OCR and regex-based classification.",
    tech: "Tesseract OCR, JS, MongoDB",
    link: "https://github.com/JeswanthPalleti-01/receipt_categorizer",
  },
  {
    title: "Stock Market Price Prediction",
    description:
      "Used Stacked LSTM to predict stock prices based on historical time series data. Achieved reliable trend estimation.",
    tech: "Python, Keras, LSTM, Matplotlib",
    link: "https://github.com/JeswanthPalleti-01/Stock-Price-Prediction",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 rounded-xl shadow-md p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Tech:</strong> {project.tech}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              >
                <FaGithub className="mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;