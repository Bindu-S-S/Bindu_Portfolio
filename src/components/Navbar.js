import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Bindu Sai Shivani</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/certifications">Certifications</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
