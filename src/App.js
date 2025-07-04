import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />

      

      {/* Future routes setup */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes> */}

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
