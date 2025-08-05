import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhijeet Singh </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently pursuing Diploma in Computer Science and Engineering from Brainware University, Kolkata.
            <br />
            <br />

            Beyond coding, I'm passionate about a variety of creative and enriching activities that keep me curious and inspired:    
          </p>
          <ul>
            <li className="about-activity">
              ✨Exploring new technologies and ideas
            </li>
            <li className="about-activity">
              ✍️Blogging about tech and experiences
            </li>
            <li className="about-activity">
              🌍Traveling to discover vast cultures and places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhijeet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
