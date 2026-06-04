import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/mdadlqrg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert(`Message envoyé, merci ${formData.name}`);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Erreur envoi message");
      }
    } catch (err) {
      alert("Erreur réseau");
    }
  };

  return (
    <Container fluid className="certificate-section" id="about">
      <Container>
        <Row>

          {/* TITLE */}
          <Col md={12} className="d-flex justify-content-start">
            <Zoom left cascade>
              <h1 className="aboutme-heading">Contact me</h1>
            </Zoom>
          </Col>

          <Col md={12} id="contact" className="mt-3">
            <Row>

              {/* FORM */}
              <Col md={4}>
                <div className="contacts-form" data-aos="fade-up">
                  <form onSubmit={handleSubmit}>

                    <div className="input-container d-flex flex-column">
                      <label className="label-class">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-input input-class"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="input-container d-flex flex-column">
                      <label className="label-class">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-input input-class"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                      />
                    </div>

                    <div className="input-container d-flex flex-column">
                      <label className="label-class">
                        Message
                      </label>
                      <textarea
                        className="form-message input-class"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Enter message"
                        required
                      />
                    </div>
                    <div className="submit-btn">
                      <button type="submit" className="submitBtn">
                        Submit <AiOutlineSend className="send-icon" />
                      </button>
                    </div>

                  </form>
                </div>
              </Col>

              {/* CONTACT DETAILS */}
              <Col md={7}>
                <div className="contacts-details">
                  <a
                    href={`mailto:fano.randriamisaina@gmail.com`}
                    className="personal-details"
                  >
                    <div className="detailsIcon">
                      <FiAtSign />
                    </div>
                    <p style={{ color: "#fbd9ad" }}>
                      fano.randriamisaina@gmail.com
                    </p>
                  </a>

                  <a
                    href="https://www.google.com/maps/place/Montpellier,+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="personal-details"
                  >
                    <div className="personal-details">
                      <div className="detailsIcon">
                        <HiOutlineLocationMarker />
                      </div>
                      <p style={{ color: "#fbd9ad" }}>
                        Montpellier, France
                      </p>
                    </div>
                  </a>
                </div>
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1549!2d3.876716!3d43.610769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af3c3f0d1a6f%3A0x1c3c7c6a2d1c9b0!2sMontpellier!5e0!3m2!1sen!2sfr!4v1700000000000"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    title="Contact Me"
                    tabIndex="0"
                    loading="lazy"
                    className=""
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>

  );
}
