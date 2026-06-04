import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import phpCert from "../../images/tosaphp.png";
import Fade from "react-reveal/Fade";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">

            {/* TOSA PHP */}
            <Col md={4}>
              <a
                href="https://www.tosa.org/FR/Index?param=VFVQY3g5RFRMVUZhKytPam44ZzViYnI5Y2lJalRCTmdGQzZnVW1HUDh2RmY5VDRjQWdqa1pPY1dML1FjZUVTOVNpZFFjOE9rZkdQQ0RvbXZmenhJMkE9PTo6vwGm1XSI7p1twn0DpOjL7w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={phpCert}
                  alt="TOSA PHP Certificate"
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
            </Col>

          </Row>
        </Fade>
      </Container>
    </div>
  );
}
