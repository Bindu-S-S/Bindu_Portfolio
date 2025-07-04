import React from 'react';

function Skills() {
  return (
    <section id="skills" className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Languages</h3>
          <p>Python, C++, Java, SQL (Postgres), JavaScript, COBOL</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Frameworks</h3>
          <p>Spring Boot, React, Angular, Node.js, Flask, JUnit, Material-UI, FastAPI</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Developer Tools</h3>
          <p>Git, Docker, Kubernetes, ServiceNow, Agile, Figma, JIRA</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Additional Skills</h3>
          <p>CI/CD, SDLC, Kafka, RabbitMQ, Postgres, MySQL, MongoDB, SQLite, Wireframing, Prototyping, User Research, Privacy Solutions (GDPR, CCPA), Windows OS, PowerShell, Batch scripting</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
