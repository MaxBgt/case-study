import React from "react";
import Modal from "../components/modal";
const clients = () => {
  return (
    <>
      <div className="header">
        <h1 className="page_tilte">Clients</h1>
        <Modal />
      </div>
      <div className="projects-container">
        <div className="client-card">
          <img src="/images/booki.jpg" alt="Booki" className="img-project" />
          <div className="infos">
            <h2 className="clients-name">Booki Agency</h2>
            <ul className="infos-projects">
              <li className="client-id">
                <span className="li-title">Client ID</span>{" "}
                <span className="id">C8D2M5N3</span>
              </li>
              <li className="project-id">
                <span className="li-title">Project ID</span>
                <span className="id">P1Z7G6H4</span>
              </li>
              <li className="contact">
                <span className="li-title">Contact</span>{" "}
                <span className="mail">bookiagency@booki.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="client-card">
          <img
            src="/images/gaming-campus.jpg"
            alt="Booki"
            className="img-project"
          />
          <div className="infos">
            <h2 className="clients-name">Gaming Campus</h2>
            <ul className="infos-projects">
              <li className="client-id">
                <span className="li-title">Client ID</span>{" "}
                <span className="id">C1AB56R2</span>
              </li>
              <li className="project-id">
                <span className="li-title">Project ID</span>
                <span className="id">P3T9K0MF</span>
              </li>
              <li className="contact">
                <span className="li-title">Contact</span>{" "}
                <span className="mail">gaming-campus@gaming.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="client-card">
          <img src="/images/kasa.jpg" alt="Booki" className="img-project" />
          <div className="infos">
            <h2 className="clients-name">Kasa</h2>
            <ul className="infos-projects">
              <li className="client-id">
                <span className="li-title">Client ID</span>{" "}
                <span className="id">C4R9E0J6</span>
              </li>
              <li className="project-id">
                <span className="li-title">Project ID</span>
                <span className="id">P5B3F2Q1</span>
              </li>
              <li className="contact">
                <span className="li-title">Contact</span>{" "}
                <span className="mail">kasa-company@kasa.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default clients;
