import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import LanguageContext from "../../../LanguageContext";

import vs from "../../../images/Vs.png";
import proxmox from "../../../images/proxmox.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import docker from "../../../images/docker.png";

import linux from "../../../images/linux.png";
import windows from "../../../images/windows.png";
import debian from "../../../images/debian.png";
import redhat from "../../../images/redhat.png";

import cisco from "../../../images/cisco.png";
import pfsense from "../../../images/pfsense.png";

import vmware from "../../../images/vmware.png";
import ovhcloud from "../../../images/ovhcloud.png";

import mysql from "../../../images/mysql.png";
import mariadb from "../../../images/mariadb.png";
import postgresql from "../../../images/postgresql.png";
import oracle from "../../../images/oracle.png";

import grafana from "../../../images/grafana.png";
import prometheus from "../../../images/prometheus.png";
import zabbix from "../../../images/zabbix.png";

import java from "../../../images/java.png";
import python from "../../../images/python.png";
import powershell from "../../../images/powershell.png";
import bash from "../../../images/bash.png";
import ansible from "../../../images/ansible.png";

export default function Toolkit() {
  const { t } = useContext(LanguageContext);
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          {t.skills.technicalButton}
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          {t.skills.personalButton}
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          {t.skills.toolkitButton}
        </Link>
      </div>

      <Zoom left cascade>
        <h1 className="mt-4">{t.skills.toolkitTitle}</h1>
      </Zoom>

      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

          {/* SYSTEMES */}
          <Col xs={4} md={2} className="tech-icons">
            <img src={linux} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={windows} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={debian} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={redhat} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          {/* RESEAU */}
          <Col xs={4} md={2} className="tech-icons">
            <img src={cisco} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={pfsense} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          {/* VIRTUALISATION / CLOUD */}
          <Col xs={4} md={2} className="tech-icons">
            <img src={vmware} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={proxmox} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={docker} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={ovhcloud} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          {/* BASES DE DONNEES */}
          <Col xs={4} md={2} className="tech-icons">
            <img src={mysql} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={mariadb} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={postgresql} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={oracle} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          {/* MONITORING */}
          <Col xs={4} md={2} className="tech-icons">
            <img src={grafana} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={prometheus} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={zabbix} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          {/* DEV / SCRIPT */}
          <Col xs={4} md={2} className="tech-icons">
            <img src={java} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={python} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={bash} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={powershell} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={ansible} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={vs} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img src={git} alt="" style={{ width: "85%", height: "85%" }} />
          </Col>

          <Col xs={4} md={2} className="tech-icons">
            <img
              src={github}
              alt="" style={{
                width: "85%", height: "85%",
                filter: "grayscale(1) invert(1)",
              }}
            />
          </Col>

        </Row>

      </Container>
    </div>
  );
}
