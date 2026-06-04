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

export default function ProjectPage() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">

          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>Projects</h1>
            </Zoom>
          </div>

          <div>

            <div>
              <Container fluid className="certificate-section" id="about">

                <Container>

                  <Row>

                    <Col md={12} className="mt-5">

                      <Row className="g-5">

                        {/* Project 1 */}
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Automated OS Deployment (FOG Project)
                                </h5>
                                <img src={fog} alt={fog} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/2Randi"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Automated operating system deployment and machine image
                                  management
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Linux, PXE, FOG Project
                              </div>
                            </div>
                          </Fade>
                        </Col>


                        {/* Project 2 */}
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Linux Infrastructure Services
                                </h5>
                                <img src={linux} alt={linux} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/2Randi/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Deployment and administration of Asterisk, OpenVPN, GLPI and Zabbix
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Linux, Asterisk, OpenVPN, GLPI, Zabbix
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        {/* Project 3 */}
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Proxmox Backup & Migration
                                </h5>
                                <img src={proxmox} alt={proxmox} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/2Randi/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Backup, restore and migration of virtual machines
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Proxmox, Virtualization, Linux
                              </div>
                            </div>
                          </Fade>
                        </Col>

                        {/* Project 4 */}
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Knowledge Graph & RAG System
                                </h5>
                                <img src={rag} alt={rag} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/2Randi/"
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className={"iconBtn"}
                                    aria-labelledby={`code`}
                                  >
                                    <FaCode
                                      id={`code`}
                                      className={"icon"}
                                      aria-label="Code"
                                    />
                                  </a>
                                </div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Development of a semantic knowledge graph and Retrieval-Augmented
                                  Generation (RAG) system for information indexing and retrieval
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                Python, RDF, SKOS, SPARQL, AI
                              </div>
                            </div>
                          </Fade>
                        </Col>

                      </Row>

                    </Col>

                  </Row>

                </Container>

              </Container>

            </div>

          </div>
        </Container>

      </Container>

    </section>
  );
}
