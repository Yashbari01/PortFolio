import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/GeneratorQRCode.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/captcha_Your_image.png";
import chatify from "../../Assets/Projects/chatapp.png";
import suicide from "../../Assets/Projects/MessageSecurity.png";
import bitsOfCode from "../../Assets/Projects/ShareFile.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chat App"
              description="An online platform that lets people send text messages to each other instantly. Users can chat one-on-one, in groups, or in public chat rooms. They can also share emojis, files, and images, depending on the app's features."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://yashbari-chatapp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FileShare"
              description="
              A file-sharing website and app make it easy for users to share files like documents, images, and videos. You can upload files, get a code, and share it with others to download. These platforms focus on security, providing features like encryption and password protection to keep your data safe."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://yashbarisharefiles.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Secure Image Verification"
              description="Captcha Your Image is a top website that offers advanced image-based CAPTCHA solutions to keep websites secure. It uses pictures to confirm human users and block bots, protecting against spam, hacking, and data theft, while providing an easy user experience."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://doctor-image-screen.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="QR Code Generator"
              description="A top QR code generator website makes it easy to create QR codes quickly for things like sharing links. You can download the QR codes in different formats, so they work with many devices and apps."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://yashbariqrcodegenerator.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CipherGuard: Secure Communication Platform"
              description="CipherGuard is a website and app that keeps your messages safe with military-grade encryption. It works on both web and mobile, ensuring your chats stay private between you and your recipients. Whether you're sharing important info or chatting with friends, CipherGuard protects your data."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://yashbarimessagesend.netlify.app"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="CipherGuard is an end-to-end message security website and app designed to safeguard your conversations with military-grade encryption. With seamless integration across web and mobile platforms, CipherGuard ensures that your messages remain confidential from sender to receiver. Our advanced encryption protocols guarantee that only you and your intended recipients can access the content of your communications, providing peace of mind in an era of digital privacy concerns. Whether you're exchanging sensitive information with colleagues or chatting with loved ones, CipherGuard prioritizes your data protection."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
