import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import phpCert from "../../images/tosaphp.png";
import Particle from "../../Particle";

export default function CertificatePage() {

  const tosaLink =
    "https://www.tosa.org/FR/Index?param=VFVQY3g5RFRMVUZhKytPam44ZzViYnI5Y2lJalRCTmdGQzZnVW1HUDh2RmY5VDRjQWdqa1pPY1dML1FjZUVTOVNpZFFjOE9rZkdQQ0RvbXZmenhJMkE9PTo6vwGm1XSI7p1twn0DpOjL7w";

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
              <h1 style={{ color: "rgb(134, 61, 176)" }}>
                Certificates
              </h1>
            </Zoom>
          </div>

          <Container fluid className="certificate-section" id="about">
            <Container>
              <Row>

                <Col md={12} className="mt-5">
                  <Row className="g-5">

                    {/* TOSA PHP */}
                    <Col md={4}>
                      <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">

                          <div className="content">

                            {/* LIEN OFFICIEL TOSA */}
                            <a
                              href={tosaLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >

                              <div className="content-overlay"></div>

                              <div
                                className="cert-header"
                                style={{ backgroundColor: "white" }}
                              >
                                {/* IMAGE UNIQUEMENT POUR AFFICHAGE */}
                                <img
                                  className="logo_img"
                                  src={phpCert}
                                  alt="TOSA PHP"
                                />
                              </div>

                              <div className="content-details fadeIn-top">
                                <h3 style={{ color: "black" }}>
                                  Voir certificat
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
                              Certification officielle en ligne
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

        </Container>
      </Container>
    </section>
  );
}