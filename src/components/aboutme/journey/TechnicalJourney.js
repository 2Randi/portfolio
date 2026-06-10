import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  DiLinux,
  DiPython,
  DiDatabase,
  DiJava,
} from "react-icons/di";
import { SiPowershell, SiProxmox, SiGit } from "react-icons/si";
import { FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Technical Journey</h1>
        </Flip>
      </div>

      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<DiLinux />}
        >
          <h3 className="vertical-timeline-element-title">
            Linux Administration
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<FaNetworkWired />}
        >
          <h3 className="vertical-timeline-element-title">
            Networking (TCP/IP, VLAN, Routing, VPN)
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Virtualization (Proxmox, VMWare)
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<FaShieldAlt />}
        >
          <h3 className="vertical-timeline-element-title">
            Security (pfSense, IPTABLES)
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<MdMonitor />}
        >
          <h3 className="vertical-timeline-element-title">
            Monitoring (Zabbix, Grafana)
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<DiPython />}
        >
          <h3 className="vertical-timeline-element-title">
            Python
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<DiJava />}
        >
          <h3 className="vertical-timeline-element-title">
            Java
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<SiPowershell />}
        >
          <h3 className="vertical-timeline-element-title">
            Bash & PowerShell Scripting
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<DiDatabase />}
        >
          <h3 className="vertical-timeline-element-title">
            Databases (PostgreSQL, MariaDB, SQL Server, MongoDB)
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(0 40 90)", color: "#b8d4f5" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(0 40 90)" }}
          date=""
          iconStyle={{ background: "rgb(0 40 90)", color: "#00d4ff" }}
          icon={<SiGit />}
        >
          <h3 className="vertical-timeline-element-title">
            Git & Version Control
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#00d4ff", color: "rgb(0 40 90)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>

    </div>
  );
}

export default TechnicalJourney;
