import React, { useState, useEffect } from 'react';

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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>

        {/* Resume Download Button */}
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
