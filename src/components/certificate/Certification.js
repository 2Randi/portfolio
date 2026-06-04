import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

import phpCert from "../../images/tosaphp.png";

export default function Certification() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>

          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Certification</h1>
              </Zoom>
            </Col>

            <Col md={12} className="mt-3">
              <Row className="g-5">

                {/* TOSA PHP */}
                <Col md={4}>
                  <Fade bottom duration={2000} distance="20px">
                    <div className="cert-card">

                      <div className="content">
                        <a
                          href="https://www.tosa.org/FR/Index?param=VFVQY3g5RFRMVUZhKytPam44ZzViYnI5Y2lJalRCTmdGQzZnVW1HUDh2RmY5VDRjQWdqa1pPY1dML1FjZUVTOVNpZFFjOE9rZkdQQ0RvbXZmenhJMkE9PTo6vwGm1XSI7p1twn0DpOjL7w"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="content-overlay"></div>

                          <div
                            className="cert-header"
                            style={{ backgroundColor: "white" }}
                          >
                            <img
                              className="logo_img"
                              src={phpCert}
                              alt="TOSA PHP"
                            />
                          </div>

                          <div className="content-details fadeIn-top">
                            <h3 style={{ color: "black" }}>
                              Certificate
                            </h3>
                          </div>
                        </a>
                      </div>

                      <div className="cert-body">
                        <h2
                          className="cert-body-title"
                          style={{ fontWeight: 700, color: "#fbd9ad" }}
                        >
                          TOSA PHP
                        </h2>

                        <h3
                          className="cert-body-subtitle"
                          style={{ color: "#eb90ff" }}
                        >
                          Certification PHP (niveau TOSA)
                        </h3>
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
  );
}