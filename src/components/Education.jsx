import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-br from-blue-100 to-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-10">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* College */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SRM Institute of Science and Technology
            </h3>
            <p className="text-gray-700 mb-1">
              <strong>Degree:</strong> B.Tech in Computer Science Engineering
            </p>
            <p className="text-gray-700 mb-1">
              <strong>CGPA:</strong> 9.10
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> Sept 2022 – June 2026
            </p>
          </motion.div>

          {/* Class 12 */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              St. Johns English School and Junior College
            </h3>
            <p className="text-gray-700 mb-1">
              <strong>Board:</strong> CBSE (Class 12)
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Percentage:</strong> 90.2%
            </p>
            <p className="text-gray-700">
              <strong>Completed:</strong> June 2022
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
