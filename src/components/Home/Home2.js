import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* About Me Text */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME</span>
            </h1>
            <p className="home-about-body">
              I am an <strong className="purple">IT Support Specialist</strong>{" "}
              currently pursuing a{" "}
              <strong>BSc in Information Technology</strong> at{" "}
              <strong>Zetech University</strong>, graduating in{" "}
              <strong>November 2025</strong>.
              <br />
              <br />
              I bring experience from both freelance work and professional
              attachment — including my time at the{" "}
              <strong>Ministry of Interior</strong> — where I supported system
              maintenance, software configuration, and network troubleshooting.
              <br />
              <br />
              My key skills include:
              <i>
                <b className="purple">
                  {" "}
                  technical support, system optimization, IT infrastructure
                  management, network troubleshooting, and cybersecurity.
                </b>
              </i>
              <br />
              <br />
              I am certified in:
              <i>
                <b className="purple">
                  {" "}
                  IBM Cybersecurity Analysis, Google IT Support, and Cisco
                  Networking Basics (in progress).
                </b>
              </i>
              <br />
              <br />
              I enjoy working on hands-on projects such as inventory management
              systems, helpdesk solutions, and automation scripts — constantly
              exploring new ways to make technology simpler and safer.
            </p>
          </Col>

          {/* Avatar */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Social Links */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Let’s <span className="purple">connect</span> and collaborate!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Alvine-chungo969"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:alvinechungo166@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alvine-chungo-622b38356/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://wa.me/254795476835"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
