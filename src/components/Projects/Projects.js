import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gym from "../../Assets/Projects/gym.png";
import tourism from "../../Assets/Projects/tourism.png";
import netflix from "../../Assets/Projects/netflix.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import ticket from "../../Assets/Projects/ticket.png";
import project from "../../Assets/Projects/mgmt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone Website"
              description="A responsive and visually appealing Netflix homepage clone built with HTML and CSS, featuring a hero section, movie thumbnails, navigation bar, and footer for a modern UI/UX."
              ghLink="https://github.com/iabhijeet24/Netflix-Clone-Website"
              demoLink="https://netflix-clone-website-kappa.vercel.app
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourism}
              isBlog={false}
              title="Meghalaya Tourism Website"
              description="This Meghalaya Tourism website showcases the state’s attractions and culture with a responsive design and intuitive navigation. Built with **HTML5**, **CSS3**, and **JavaScript**, it offers a seamless way to explore Meghalaya’s beauty."
              ghLink="https://github.com/iabhijeet24/Meghalaya-Tourism-Website"
              demoLink="
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This portfolio website showcases my web development skills, projects, and achievements through a clean, responsive design. Built with **CSS3**, **JavaScript**, and **React.js**, it highlights my work and expertise for recruiters, collaborators, and visitors."
              ghLink="https://github.com/iabhijeet24/GYM-Website"
              demoLink="gym-website-roan-five.vercel.app
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Hostel Management System"
              description="HostelHub is a smart web platform that simplifies hostel management with features like room allocation, complaint tracking, and visitor logs."
              ghLink="https://github.com/iabhijeet24/hostelhub-management-system"
              demoLink="https://hostelhub-management-system.vercel.app/
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym Website"
              description="This is a personal gym website project I created using HTML, CSS, and JavaScript. It features a clean, responsive design with sections like a hero banner, membership plans, trainer profiles, schedules, and a contact form."
              ghLink="https://github.com/iabhijeet24/GYM-Website"
              demoLink="gym-website-roan-five.vercel.app
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="Ticket Booking Website Website"
              description="A responsive ticket booking website built using HTML, CSS, and JavaScript. Allows users to select seats, view booking summaries, and manage their reservations with a clean and user-friendly interface."
              ghLink="https://github.com/iabhijeet24/Ticket-Booking-Website"
              demoLink="https://v0-new-project-ggs40znzpsl.vercel.app
"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
