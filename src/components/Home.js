import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Bindu Sai Shivani Yerramsetti</h1>
      <p className="text-xl">Software Engineer | Full Stack Developer</p>
      <p className="max-w-xl text-center mt-4">
        Software Engineer with 2+ years of experience building scalable SaaS applications using Java, Spring Boot, and RESTful APIs. Skilled in Python, C++, React, and DevOps.
      </p>
    </motion.section>
  );
}

export default Home;
