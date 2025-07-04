import React from 'react';

function Experience() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">Accenture Solutions Private Limited</h3>
          <p className="italic">Application Development Associate (Aug 2021 – Jul 2023)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed and optimized 30+ RESTful APIs using Java and Spring Boot.</li>
            <li>Built responsive frontends with React, HTML, CSS, Bootstrap.</li>
            <li>Achieved 95% unit test coverage with JUnit and Mockito.</li>
            <li>Managed CI/CD workflows with Git, DevOps tools, and YAML.</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">CTS</h3>
          <p className="italic">Software Engineer Intern - Web Development (Jan 2021 – May 2021)</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Improved UI with React, HTML, CSS, Bootstrap, increasing user satisfaction by 20%.</li>
            <li>Achieved 95% code coverage with JUnit and Mockito, reducing bugs by 30%.</li>
            <li>Delivered over 30 features across 20 sprints with 100% on-time completion.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
