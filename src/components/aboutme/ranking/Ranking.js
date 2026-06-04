import React, { useContext } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import LanguageContext from "../../../LanguageContext";

export default function Ranking() {
  const { t } = useContext(LanguageContext);
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h3>Coming Soon...</h3>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          {/* <Col md={3}>
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
          <Col md={3}>
            <a
              href="mailto:fano.randriamisaina@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaGoogle />
              </Zoom>
            </a>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
// import React from 'react'
// import Particle from '../../Particle'
// import { Container } from "react-bootstrap";

// export default function Notfound() {
//   return (
//     <section className="home-section">
//       <Container fluid id="home" >
//         <Particle />
//         <Container className="home-content d-flex justify-content-center align-items-center comingsoonclass">

//           <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_zkzzfkke.json" background="transparent" speed="1" style={{ width: '40%', height: '100%' }} loop autoplay></lottie-player>
//         </Container>
//       </Container>
//     </section>
//   )
// }
