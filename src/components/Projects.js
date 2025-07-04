import React from 'react';

function Projects() {
  const projects = [
    {
      name: "RegenX – CNS Regeneration Explorer",
      duration: "Jan 2025 – May 2025",
      description: "Full-stack web app with React, Node.js, Express, and MongoDB for neuroscience literature exploration. Includes user authentication, document upload, and query tracking."
    },
    {
      name: "Campus Safety Watch – Crime Mapping Alert System",
      duration: "Jan 2024 – May 2024",
      description: "Cross-platform web/mobile app using Spring Boot, PostgreSQL, and Redis for campus safety. Implemented role-based access and real-time crime mapping via Google Maps API."
    },
    {
      name: "Predict Type 2 Diabetes Mellitus",
      duration: "June 2020 – Dec 2021",
      description: "Machine learning models (SVM, Random Forest, Decision Tree) on 15,000 records to predict Type 2 Diabetes. Optimized with hyperparameter tuning, evaluated with F1 score and ROC-AUC."
    }
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg bg-white">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-sm text-gray-600">{proj.duration}</p>
            <p className="mt-2">{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
