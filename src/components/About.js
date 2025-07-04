import React from 'react';

function About() {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <div>
          <h3 className="text-xl font-semibold">University of Maryland Baltimore County</h3>
          <p>Master of Computer Software Engineering (Aug 2023 – May 2025)</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Gayatri Vidya Parishad College of Engineering</h3>
          <p>B.Tech in Computer Science and Engineering (Aug 2017 – May 2021)</p>
          <p>Achievements: National scholarship for top 0.01% rank in All India Engineering Entrance Test</p>
        </div>
      </div>
    </section>
  );
}

export default About;
