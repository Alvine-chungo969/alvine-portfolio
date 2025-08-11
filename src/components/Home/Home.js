import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Left Side - Intro */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="main-name">ALVINE CHUNGO</strong>
              </h1>

              <p style={{ fontSize: "1.2em", marginTop: "20px" }}>
                I’m an <strong>IT Support Specialist</strong> from{" "}
                <strong>Nairobi, Kenya</strong>, dedicated to keeping systems
                running smoothly, securely, and efficiently.  
                With expertise in{" "}
                <strong>
                  technical support, network troubleshooting, and cybersecurity
                </strong>
                , I help individuals and organizations get the best out of
                their technology.
              </p>

              <div style={{ padding: "30px 0", textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Right Side - Hero Image */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="IT support illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
