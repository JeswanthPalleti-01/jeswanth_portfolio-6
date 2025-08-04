import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Want to collaborate or have a project in mind? I'm always open to new
          opportunities and discussions.
        </motion.p>

        <motion.a
          href="mailto:jeswanthpalleti8055@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <FaEnvelope className="mr-2" />
          Send Email
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;