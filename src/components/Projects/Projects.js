import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import gym from "../../Assets/Projects/gym.png"
import tourism from "../../Assets/Projects/tourism.png"
import netflix from "../../Assets/Projects/netflix.png"


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
              imgPath={gym}
              isBlog={false}
              title="Gym Website"
              description="sgdig sfsgf uudfgsgf ysgfysgf gdufhuksf bisgfisgf gigfigsyd"
              ghLink="https://github.com/iabhijeet24/GYM-Website"
              demoLink="gym-website-roan-five.vercel.app
"
            />
          </Col>



        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
