import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="eyebrow">TICKET-05 · RESOLVED WORK</div>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "#8fa3ac" }}>
          A log of resolved builds — projects I've worked on that showcase my
          IT support and problem-solving skills.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Inventory Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              ticketId="#INV-01"
              priority="P2"
              title="Inventory Management System"
              description="A full-featured inventory tracking system built to manage stock levels, product details, and transactions. Includes features for adding, updating, and deleting inventory items with a user-friendly interface."
              ghLink="https://github.com/Alvine-chungo969/Inventory-Management-System"
            />
          </Col>

          {/* osTicket Deployment */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              ticketId="#HELPDESK-02"
              priority="P1"
              title="osTicket Deployment"
              description="Configured and deployed osTicket, an open-source helpdesk solution, to streamline IT support requests. Customized ticket categories, automated workflows, and improved response efficiency for IT service management."
              ghLink="https://github.com/Alvine-chungo969/osTicket"
            />
          </Col>

          {/* Personal Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              ticketId="#PORTFOLIO-03"
              priority="P3"
              title="My Portfolio"
              description="A personal portfolio website built to showcase my skills, projects, and certifications in IT support and cybersecurity. Developed using React and styled for a modern, professional look."
              ghLink="https://github.com/Alvine-chungo969/my-portfolio"
            />
          </Col>

          {/* Library Fine Calculation */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              ticketId="#LIB-04"
              priority="P3"
              title="Library Fine Calculation"
              description="A simple program to calculate overdue library book fines based on due dates and return dates. Automates fine computation to save time and improve accuracy."
              ghLink="https://github.com/Alvine-chungo969/Library-fine-calculation"
            />
          </Col>

          {/* Electricity Bill Calculator */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              ticketId="#UTIL-05"
              priority="P3"
              title="Electricity Bill Calculator"
              description="A calculator that computes electricity usage charges based on consumption units and applicable rates. Helps track energy costs and promote efficient usage."
              ghLink="https://github.com/Alvine-chungo969/Electricity-bill-calculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
