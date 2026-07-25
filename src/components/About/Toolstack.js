import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiWireshark,
  SiVirtualbox,
  SiGithub,
  SiMicrosoftteams,
} from "react-icons/si";
import { MdDesktopWindows } from "react-icons/md";

const tools = [
  { icon: <SiVisualstudiocode />, label: "VS Code" },
  { icon: <SiWireshark />, label: "Wireshark" },
  { icon: <SiVirtualbox />, label: "VirtualBox" },
  { icon: <MdDesktopWindows />, label: "Remote Desktop" },
  { icon: <SiMicrosoftteams />, label: "Microsoft Teams" },
  { icon: <SiGithub />, label: "GitHub" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((t) => (
        <Col xs={6} md={3} lg={2} key={t.label}>
          <div className="service-tile">
            <div className="service-icon">{t.icon}</div>
            <p className="service-label">{t.label}</p>
            <span className="service-status">
              <span className="status-dot"></span>Operational
            </span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
