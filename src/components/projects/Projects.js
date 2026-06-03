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
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Déploiement automatisé (FOG Project)
                    </h5>

                    <img src={fog} alt="fog" />

                    <div className="project--showcaseBtn">
                      <a href="https://github.com/2Randi" target="_blank" rel="noreferrer">
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df" }}>
                    Automatisation du déploiement d’OS et gestion d’images machines.
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
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Services infrastructure Linux
                    </h5>

                    <img src={linux} alt="linux" />

                    <div className="project--showcaseBtn">
                      <a href="https://github.com/2Randi" target="_blank" rel="noreferrer">
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df" }}>
                    Déploiement et administration Asterisk, OpenVPN, GLPI, Zabbix.
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
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Backup & migration Proxmox
                    </h5>

                    <img src={proxmox} alt="proxmox" />

                    <div className="project--showcaseBtn">
                      <a href="https://github.com/2Randi" target="_blank" rel="noreferrer">
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df" }}>
                    Sauvegarde, restauration et migration de machines virtuelles.
                  </p>

                  <div className="project--lang">
                    Proxmox, Virtualisation, Linux
                  </div>
                </div>
              </Fade>
            </Col>

            {/* RAG */}
            <Col md={3}>
              <Fade bottom>
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Système RAG (IA)
                    </h5>

                    <img src={rag} alt="rag" />

                    <div className="project--showcaseBtn">
                      <a href="https://github.com/2Randi" target="_blank" rel="noreferrer">
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df" }}>
                    Système de génération augmentée par récupération avec Python.
                  </p>

                  <div className="project--lang">
                    Python, IA, NLP
                  </div>
                </div>
              </Fade>
            </Col>

            {/* RDF */}
            <Col md={3}>
              <Fade bottom>
                <div className="singleProject" style={{ backgroundColor: "rgb(142 70 186 / 31%)", border: "1px solid" }}>
                  <div className="projectContent">
                    <h5 style={{ color: "#fbd9ad" }}>
                      Graphes RDF / SKOS
                    </h5>

                    <img src={rdf} alt="rdf" />

                    <div className="project--showcaseBtn">
                      <a href="https://github.com/2Randi" target="_blank" rel="noreferrer">
                        <FaCode />
                      </a>
                    </div>
                  </div>

                  <p className="project--desc" style={{ background: "#fbd9ad", color: "#b061df" }}>
                    Indexation et interrogation de graphes sémantiques.
                  </p>

                  <div className="project--lang">
                    Python, RDF, SKOS
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
