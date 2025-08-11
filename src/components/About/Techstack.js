import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiLinux, DiPython, DiGit } from "react-icons/di";
import { SiWindows, SiCisco, SiWireshark, SiKalilinux, SiMicrosoftoffice, SiPowershell, SiVisualstudiocode } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows title="Windows OS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux title="Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux title="Kali Linux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco title="Cisco Networking" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark title="Wireshark" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNetworkWired title="Networking" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python Scripting" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell title="PowerShell Scripting" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git Version Control" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice title="Microsoft Office" />
      </Col>
    </Row>
  );
}

export default Techstack;
