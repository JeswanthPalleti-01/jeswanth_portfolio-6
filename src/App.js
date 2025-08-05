import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans scroll-smooth text-lg">
      <Navbar />
      <Hero />
      <Education />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;