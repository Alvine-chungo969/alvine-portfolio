import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import {
  SiWindows11,
  SiMicrosoftazure,
  SiMicrosoftoffice,
  SiSap,
  SiPowershell,
} from "react-icons/si";
import { FaNetworkWired, FaTicketAlt, FaUsersCog, FaUserShield } from "react-icons/fa";

const services = [
  { icon: <FaTicketAlt />, label: "ServiceNow ITSM" },
  { icon: <FaUsersCog />, label: "Active Directory" },
  { icon: <SiMicrosoftazure />, label: "Azure & Intune" },
  { icon: <SiMicrosoftoffice />, label: "Microsoft 365" },
  { icon: <SiSap />, label: "SAP" },
  { icon: <SiWindows11 />, label: "Windows OS" },
  { icon: <FaNetworkWired />, label: "Networking" },
  { icon: <SiPowershell />, label: "PowerShell" },
  { icon: <DiPython />, label: "Python" },
  { icon: <DiGit />, label: "Git" },
  { icon: <FaUserShield />, label: "Cybersecurity" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {services.map((s) => (
        <Col xs={6} md={3} lg={2} key={s.label}>
          <div className="service-tile">
            <div className="service-icon">{s.icon}</div>
            <p className="service-label">{s.label}</p>
            <span className="service-status">
              <span className="status-dot"></span>Operational
            </span>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
