import React, { useContext } from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import LanguageContext from "../../../LanguageContext";

export default function SocialMedia() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>{t.socialMedia.title}</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">

          <Col md={3}>
            <a
              href="https://www.instagram.com/tsiory_randi/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineInstagram />
              </Zoom>
            </a>
          </Col>

          <Col md={3}>
            <a
              href="https://github.com/2Randi"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/t-fanomezana-r/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
