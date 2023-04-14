import React, { useState } from "react";
import Modal from "../modal";

const initialProjects = [
  {
    clientName: "Booki Agency",
    projectName: "Booki",
    image: "/images/booki.jpg",
    clientId: "C8D2M5N3",
    projectId: "P1Z7G6H4",
    email: "bookiagency@booki.com",
  },
  {
    clientName: "Gaming Campus",
    projectName: "Gaming Campus Project",
    image: "/images/gaming-campus.jpg",
    clientId: "C1AB56R2",
    projectId: "P3T9K0MF",
    email: "gaming-campus@gaming.com",
  },
  {
    clientName: "Kasa",
    projectName: "Kasa Project",
    image: "/images/kasa.jpg",
    clientId: "C4R9E0J6",
    projectId: "P5B3F2Q1",
    email: "kasa-company@kasa.com",
  },
];

const ContentClientsPage = () => {
  const [projects, setProjects] = useState(initialProjects);

  const addProjects = (project) => {
    setProjects((prevProjects) => [...prevProjects, project]);
  };

  return (
    <>
      <Modal addProjects={addProjects} />
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="client-card">
            <img
              src={project.image}
              alt={project.projectName}
              className="img-project"
            />
            <div className="infos">
              <h2 className="clients-name">{project.clientName}</h2>
              <ul className="infos-projects">
                <li className="client-id">
                  <span className="li-title">Client ID</span>{" "}
                  <span className="id">{project.clientId}</span>
                </li>
                <li className="project-id">
                  <span className="li-title">Project ID</span>
                  <span className="id">{project.projectId}</span>
                </li>
                <li className="contact">
                  <span className="li-title">Contact</span>{" "}
                  <span className="mail">{project.email}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContentClientsPage;
