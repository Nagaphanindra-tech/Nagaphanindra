import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Project One:",
      Title: " Rotary International",
      description:
        "Rotary is an organization of business and professional persons united worldwide who provide humanitarian service, encourage high ethical standards in all vocations, and help build goodwill and peace in the world. It runs on the donations given by the people across the world.",
      techStack: ["HTML", "CSS", "Material-UI", "React", "ReduxToolkit"],
    },

    {
      name: "Project Two:",
      Title: " Mobile Credential Platform (MCP)",
      description:
        " MCP Portal is a web application created for UTC to track all the details of users under this portal,There are three levels of entities are there in each entity we can see three types of user roles OEM, Reseller and Customer are the three entities and in each of these entities we have admin, user and custom roles. Each role has different permissions based on that permission we provide access to particular modules.",
      techStack: ["HTML", "CSS", "Material-UI", "React", "ReduxToolkit"],
    },

    {
      name: "Project Three:",
      Title: " Axiata",
      description:
        " The Axiata Cargo Tracking System is a proof-of-concept (POC) initiative designed to streamline the tracking andmanagement of goods and import/export cargo within port facilities. The system focuses on monitoring  vehicles, containers, and their drivers in real-time, enhancing operational efficiency and securitymeasures. Live Streaming Surveillance, Vehicle and Container Tracking, Driver Identification, Detailed Vehicleand Cargo Information, Customizable Alerts and Notifications these are the main features implemented.",
      techStack: ["HTML", "CSS", "Material-UI", "React", "ReduxToolkit"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects:-</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <h3>{project.Title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
