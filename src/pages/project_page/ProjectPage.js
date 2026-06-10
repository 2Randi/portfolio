import React, { useContext } from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import LanguageContext from "../../LanguageContext";
import pfsense from "../../images/pfsense.png";
import asterisk from "../../images/asterisk.png";
import zabbix from "../../images/zabbix.png";
import bash from "../../images/bash.png";
import fog from "../../images/fog.png";
import linux from "../../images/linux.png";
import proxmox from "../../images/proxmox.png";
import rag from "../../images/rag.png";
import { FaCode } from "react-icons/fa";

const CARD_STYLE = {
  backgroundColor: "rgba(0, 55, 110, 0.28)",
  border: "1px solid rgba(0, 180, 255, 0.35)",
};

const DESC_STYLE = {
  background: "#081d3a",
  color: "#00d4ff",
  fontWeight: 600,
};

const LANG_STYLE = {
  background: "#081d3a",
  color: "#00d4ff",
  fontWeight: 600,
};

const projects = [
  {
    title: "pfSense Firewall & Network Security",
    img: pfsense,
    alt: "pfsense",
    desc: "Deployment, configuration and administration of pfSense firewall — ruleset, VLANs, NAT, VPN tunnels and PRA/PCA participation",
    tags: "pfSense, iptables, VPN, VLAN, Firewall",
    href: "https://github.com/2Randi",
  },
  {
    title: "VoIP Infrastructure (Asterisk & SIP)",
    img: asterisk,
    alt: "asterisk",
    desc: "Deployment of Asterisk VoIP server, SIP/RTP traffic analysis with Wireshark, one-way audio incident diagnosis and resolution",
    tags: "Asterisk, SIP, RTP, OpenVPN, Wireshark",
    href: "https://github.com/2Randi",
  },
  {
    title: "Network Monitoring (Zabbix & Grafana)",
    img: zabbix,
    alt: "zabbix",
    desc: "Infrastructure supervision with Zabbix and Grafana dashboards — alerting, availability tracking and proactive incident prevention",
    tags: "Zabbix, Grafana, Prometheus, SNMP",
    href: "https://github.com/2Randi",
  },
  {
    title: "Automation Scripts (Bash / Python / PS)",
    img: bash,
    alt: "bash",
    desc: "Administration automation scripts: user provisioning, backup routines, server health checks and scheduled maintenance tasks",
    tags: "Bash, Python, PowerShell, Cron",
    href: "https://github.com/2Randi",
  },
  {
    title: "Automated OS Deployment (FOG Project)",
    img: fog,
    alt: "fog",
    desc: "PXE-based automated OS deployment, disk imaging and machine cloning across a fleet of workstations",
    tags: "Linux, PXE, FOG Project, DHCP",
    href: "https://github.com/2Randi",
  },
  {
    title: "Linux Infrastructure Services",
    img: linux,
    alt: "linux",
    desc: "Deployment and administration of Asterisk VoIP, OpenVPN, GLPI helpdesk and Zabbix monitoring on Debian/Ubuntu servers",
    tags: "Linux, Asterisk, OpenVPN, GLPI, Zabbix",
    href: "https://github.com/2Randi",
  },
  {
    title: "Proxmox VM Backup & Migration",
    img: proxmox,
    alt: "proxmox",
    desc: "Backup, restore and live migration of virtual machines on Proxmox VE — dump strategy and storage optimisation",
    tags: "Proxmox, VMware, Virtualisation, Linux",
    href: "https://github.com/2Randi",
  },
  {
    title: "Knowledge Graph & RAG System",
    img: rag,
    alt: "knowledge-graph-rag",
    desc: "Semantic knowledge graph (SKOS/RDF) indexing and Retrieval-Augmented Generation system for structured information retrieval",
    tags: "Python, RDF, SKOS, SPARQL, AI",
    href: "https://github.com/2Randi",
  },
];

export default function ProjectPage() {
  useContext(LanguageContext);

  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">

          <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "#081d3a", borderRadius: "8px", padding: "12px 0" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "#00d4ff" }}>Projects</h1>
            </Zoom>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>
                <Col md={12} className="mt-5">
                  <Row className="g-5">
                    {projects.map((p, i) => (
                      <Col md={3} className="col-sm-12 col-md-4" key={i}>
                        <Fade bottom>
                          <div className="singleProject" style={CARD_STYLE}>
                            <div className="projectContent">
                              <h5 style={{ color: "#b8d4f5" }}>{p.title}</h5>
                              <img src={p.img} alt={p.alt} />
                              <div className="project--showcaseBtn">
                                <a
                                  href={p.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="iconBtn"
                                  aria-label="Code"
                                >
                                  <FaCode className="icon" aria-label="Code" />
                                </a>
                              </div>
                            </div>
                            <h6>
                              <p className="project--desc" style={DESC_STYLE}>
                                {p.desc}
                              </p>
                            </h6>
                            <div className="project--lang" style={LANG_STYLE}>
                              {p.tags}
                            </div>
                          </div>
                        </Fade>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>

        </Container>
      </Container>
    </section>
  );
}
