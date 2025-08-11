import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiMicrosoftoffice, SiWireshark, SiVirtualbox, SiGithub } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { MdDesktopWindows } from "react-icons/md";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice title="Microsoft Office Suite" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark title="Wireshark" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVirtualbox title="VirtualBox" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdDesktopWindows title="Remote Desktop Tools" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired title="Networking Tools" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
    </Row>
  );
}

export default Toolstack;
