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
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const CARD_STYLE = {
  backgroundColor: "rgba(0, 55, 110, 0.28)",
  border: "1px solid rgba(0, 180, 255, 0.35)",
};

const DESC_STYLE = {
  background: "#081d3a",
  color: "#00d4ff",
};

const LANG_STYLE = {
  background: "#081d3a",
  color: "#00d4ff",
  fontWeight: 600,
};

export default function Projects() {
  const { t } = useContext(LanguageContext);

  const projects = [
    {
      title: "pfSense Firewall & Network Security",
      img: pfsense,
      alt: "pfsense",
      desc: "Deployment, configuration and administration of pfSense firewall — ruleset, VLANs, NAT, VPN tunnels and PRA/PCA participation",
      tags: "pfSense, iptables, VPN, VLAN, Firewall",
    },
    {
      title: "VoIP Infrastructure (Asterisk & SIP)",
      img: asterisk,
      alt: "asterisk",
      desc: "Deployment of Asterisk VoIP server, SIP/RTP traffic analysis with Wireshark, one-way audio incident diagnosis and resolution",
      tags: "Asterisk, SIP, RTP, OpenVPN, Wireshark",
    },
    {
      title: "Network Monitoring (Zabbix & Grafana)",
      img: zabbix,
      alt: "zabbix",
      desc: "Infrastructure supervision with Zabbix and Grafana dashboards — alerting, availability tracking and proactive incident prevention",
      tags: "Zabbix, Grafana, Prometheus, SNMP",
    },
    {
      title: "Automation Scripts (Bash / Python / PS)",
      img: bash,
      alt: "bash",
      desc: "Administration automation scripts: user provisioning, backup routines, server health checks and scheduled maintenance tasks",
      tags: "Bash, Python, PowerShell, Cron",
    },
  ];

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

            {projects.map((p, i) => (
              <Col md={3} key={i}>
                <Fade bottom>
                  <div className="singleProject" style={CARD_STYLE}>
                    <div className="projectContent">
                      <h5 style={{ color: "#b8d4f5" }}>{p.title}</h5>
                      <img src={p.img} alt={p.alt} />
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
                    <p className="project--desc" style={DESC_STYLE}>
                      {p.desc}
                    </p>
                    <div className="project--lang" style={LANG_STYLE}>
                      {p.tags}
                    </div>
                  </div>
                </Fade>
              </Col>
            ))}
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
