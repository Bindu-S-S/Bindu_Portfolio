import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 text-white flex justify-between items-center shadow z-50">
      <h1 className="text-xl font-bold">Bindu Sai Shivani</h1>
      <div className="space-x-4 flex items-center">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer">Experience</Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
        <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
        <Link to="certifications" smooth={true} duration={500} className="cursor-pointer">Certifications</Link>
        
        {/* ✅ Add Contact link here */}
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>

        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 px-3 py-1 rounded text-sm hover:bg-blue-700 transition"
        >
          Resume
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-600 px-3 py-1 rounded text-sm"
        >
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
