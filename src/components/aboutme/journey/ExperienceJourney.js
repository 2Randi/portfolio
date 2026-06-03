import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
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
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid rgb(78 22 112)" }}
          date="Apr 2026 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Development Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            IRD - Montpellier, France
          </h6>
            <p>• Development of Retrieval-Augmented Generation (RAG) systems</p>
            <p>• Indexing and querying RDF/SKOS knowledge graphs using Python</p>
            <p>• Integration of RAG systems with external APIs and databases</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Feb 2025 - Jul 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Systems and Network Administrator Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            LundiMatin - Montpellier, France
          </h6>
            <p>• Deployment and administration of Linux servers</p>
            <p>• Management of VoIP and VPN infrastructures</p>
            <p>• SIP/RTP traffic analysis using Wireshark</p>
            <p>• Troubleshooting and incident resolution</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid rgb(78 22 112)" }}
          date="Jun 2024 - Aug 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Systems, Network and Security Administrator Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            VNB-IT - Montpellier, France
          </h6>
          <p>• User and access rights management</p>
          <p>• Deployment and administration of pfSense firewall</p>
          <p>• Participation in PRA/PCA activities</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid rgb(78 22 112)" }}
          date="Sept 2021 - Jul 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Network Technician
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Orange Business - Antananarivo, Madagascar
          </h6>
          <p>• N1/N2 incident diagnosis and resolution</p>
          <p>• Network infrastructure monitoring</p>
          <p>• Operational support for network teams</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
