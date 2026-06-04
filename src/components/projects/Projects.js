import React, { useContext } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import LanguageContext from "../../LanguageContext";
import fog from "../../images/fog.png";
import linux from "../../images/linux.png";
import proxmox from "../../images/proxmox.png";
import rag from "../../images/rag.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="d-flex justify-content-start">
              <Zoom left cascade>
                <h1 className="aboutme-heading">{t.projects.title}</h1>
              </Zoom>
            </Col>

            {/* FOG PROJECT */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Automated OS Deployment (FOG Project)
                    </h5>

                    <img src={fog} alt="fog" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                    }}
                  >
                    Automated operating system deployment and machine image
                    management
                  </p>

                  <div className="project--lang">
                    Linux, PXE, FOG Project
                  </div>
                </div>
              </Fade>
            </Col>

            {/* LINUX SERVICES */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Linux Infrastructure Services
                    </h5>

                    <img src={linux} alt="linux" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                    }}
                  >
                    Deployment and administration of Asterisk, OpenVPN, GLPI and Zabbix
                  </p>

                  <div className="project--lang">
                    Linux, Asterisk, OpenVPN, GLPI, Zabbix
                  </div>
                </div>
              </Fade>
            </Col>

            {/* PROXMOX */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Proxmox Backup & Migration
                    </h5>

                    <img src={proxmox} alt="proxmox" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                    }}
                  >
                    Backup, restore and migration of virtual machines
                  </p>

                  <div className="project--lang">
                    Proxmox, Virtualization, Linux
                  </div>
                </div>
              </Fade>
            </Col>

            {/* KNOWLEDGE GRAPH & RAG */}
            <Col md={3}>
              <Fade bottom>
                <div
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Knowledge Graph & RAG System
                    </h5>

                    <img src={rag} alt="knowledge-graph-rag" />

                    <div className="project--showcaseBtn">
                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p
                    className="project--desc"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                    }}
                  >
                    Development of a semantic knowledge graph and Retrieval-Augmented
                    Generation (RAG) system for information indexing and retrieval
                  </p>

                  <div className="project--lang">
                    Python, RDF, SKOS, SPARQL, AI
                  </div>
                </div>
              </Fade>
            </Col>

          </Row>

          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                {t.projects.viewAll}
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}