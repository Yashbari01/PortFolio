import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi everyone, I'm <span className="purple">Yash Bari </span>
            from <span className="purple"> Jogeshwari East, Mumbai, India.</span>
            <br />
            <br />
            I have a Bachelor’s degree in Computer Applications (BCA) and was previously working as a full-stack developer at DIGI-LATERAL Solutions.
            {/* I have completed study Bachelor of Computer Applications (BCA) in Software Developer. */}
            <br />
            <br />
            Right now, I'm on the lookout for a new job as a full-stack developer. 🚀
            <br />
            <br />
            Apart from coding, I enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Technology📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling✈️ 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
