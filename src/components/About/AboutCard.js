import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Alvine Chungo</span> from 
            <span className="purple"> Nairobi, Kenya</span> — 
            an <strong>IT Support Specialist</strong> passionate about 
            <strong> system administration, networking, and cybersecurity</strong>.
            <br />
            Currently pursuing my <strong>BSc in Information Technology</strong> at Zetech University (Graduating Nov 2025).
            <br />
            Certified in <strong>IBM Cybersecurity Analysis</strong>, 
            <strong> Google IT Support</strong>, and <strong>Cisco Networking Basics</strong>.
            <br />
            <br />
            Outside work, I’m driven by curiosity and enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new cybersecurity tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Building IT support solutions like osTicket
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing tech knowledge with others
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology should empower people, not frustrate them."
          </p>
          <footer className="blockquote-footer">Alvine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
