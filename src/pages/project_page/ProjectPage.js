import React, { useContext } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import LanguageContext from "../../LanguageContext";
import fog from "../../images/home-bg.jpg";
import linux from "../../images/pc.png";
import proxmox from "../../images/pm.png";
import rag from "../../images/pg.png";
import rdf from "../../images/skill.png";
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
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176)" }}>
                {t.projects.title}
              </h1>
            </Zoom>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row className="g-5 mt-5">

                {/* FOG */}
                <Col md={3}>
                  <Fade bottom>
                    <div className="singleProject">
                      <h5 style={{ color: "#fbd9ad" }}>
                        Déploiement automatisé (FOG Project)
                      </h5>

                      <img src={fog} alt="FOG" />

                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>

                      <p className="project--desc">
                        Déploiement automatique d’OS et gestion d’images machines via PXE/FOG.
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
                    <div className="singleProject">
                      <h5 style={{ color: "#fbd9ad" }}>
                        Services infrastructure Linux
                      </h5>

                      <img src={linux} alt="Linux" />

                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>

                      <p className="project--desc">
                        Déploiement et administration de services : Asterisk, OpenVPN, GLPI, Zabbix.
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
                    <div className="singleProject">
                      <h5 style={{ color: "#fbd9ad" }}>
                        Backup & migration Proxmox
                      </h5>

                      <img src={proxmox} alt="Proxmox" />

                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>

                      <p className="project--desc">
                        Sauvegarde, restauration et migration de machines virtuelles.
                      </p>

                      <div className="project--lang">
                        Proxmox, Virtualisation
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* RAG */}
                <Col md={3}>
                  <Fade bottom>
                    <div className="singleProject">
                      <h5 style={{ color: "#fbd9ad" }}>
                        Système RAG (IA)
                      </h5>

                      <img src={rag} alt="RAG" />

                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>

                      <p className="project--desc">
                        Système de génération augmentée par récupération (Python + NLP).
                      </p>

                      <div className="project--lang">
                        Python, IA, NLP
                      </div>
                    </div>
                  </Fade>
                </Col>

                {/* RDF / SKOS */}
                <Col md={3}>
                  <Fade bottom>
                    <div className="singleProject">
                      <h5 style={{ color: "#fbd9ad" }}>
                        Graphes RDF / SKOS
                      </h5>

                      <img src={rdf} alt="RDF" />

                      <a
                        href="https://github.com/2Randi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaCode />
                      </a>

                      <p className="project--desc">
                        Indexation et interrogation de graphes sémantiques RDF/SKOS.
                      </p>

                      <div className="project--lang">
                        Python, RDF, SKOS
                      </div>
                    </div>
                  </Fade>
                </Col>

              </Row>
            </Container>
          </Container>

        </Container>
      </Container>
    </section>
  );
}