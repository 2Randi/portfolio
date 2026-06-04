import React, { useContext } from 'react'
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import LanguageContext from '../../LanguageContext';


export default function AboutmeContainer() {
    const { t } = useContext(LanguageContext);
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={12} className="home-about-description d-flex justify-content-start">
                    <Zoom left cascade>
                        <h1 className='aboutme-heading'>
                            {t.about.heading}
                        </h1>
                    </Zoom>
                    </Col>
                    <Col ms={12} className="mt-3 d-flex flex-column">
                        <div>
                            <Nav justify variant="tabs" defaultActiveKey="/">
                            <Nav.Item className="Navitem">
                                <Nav.Link as={Link} to="/" eventKey="link-1" style={{ fontSize: "17px",fontWeight:700 }}>{t.aboutNav.about}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="technicalskill" eventKey="link-2" style={{ fontSize: "17px",fontWeight:700 }}>{t.aboutNav.skills}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="educationjourney" eventKey="link-3" style={{ fontSize: "17px",fontWeight:700 }}>{t.aboutNav.journey}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="ranking" eventKey="link-4" style={{ fontSize: "17px",fontWeight:700 }}>
                                {t.aboutNav.ranking}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="socialmedia" eventKey="link-5" style={{ fontSize: "17px",fontWeight:700 }}>
                                {t.aboutNav.socialMedia}
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <div>
                                <Outlet />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
