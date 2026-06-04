import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Tsiory Fanomezana </b>
                and I am a <b className="purple">Networks and Systems Engineer </b>
                based in France.
                <br />
                <br />
                I am passionate about designing, deploying and maintaining &nbsp;
                <b className="purple">
                  {" "}
                  IT infrastructures, computer networks and enterprise systems.{" "}
                </b>
                <br />
                <br />
                I have experience working with &nbsp;

                <b className="purple">
                  {" "}
                  Linux, Windows Server, virtualization platforms, network services and IT security solutions.{" "}
                </b>
                <br />
                <br />
                I also enjoy automating tasks and solving technical challenges using &nbsp;
                <b className="purple">
                  {" "}
                  Python, Bash and PowerShell.
                </b>
                <br />
                <br />Whenever possible, I like &nbsp;
                <b className="purple"> improving system reliability, optimizing infrastructure performance and learning new technologies. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
