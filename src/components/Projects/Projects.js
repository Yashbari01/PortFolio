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
              description="An online text chat app is a digital platform that allows users to communicate with each other in real-time via text messages. These apps typically facilitate one-on-one conversations, group chats, or even public chat rooms, depending on their features. Users can send messages, emojis, and sometimes even files or images through these platforms."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://yashbari-chatapp.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="FileShare"
              description="A file-sharing website and app facilitate the transfer of files between users, enabling seamless exchange of documents, images, videos, and more. Users can upload files to the platform, generating a unique link or code that they can share with others for download. These platforms often prioritize security and privacy, offering encryption and password protection features to safeguard sensitive data."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://yashbarisharefiles.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Secure Image Verification"
              description="
              Captcha Your Image is a cutting-edge website dedicated to providing top-notch image-based CAPTCHA solutions. With a focus on enhancing online security, this platform offers a robust system that utilizes images to verify human users, preventing automated bots from accessing websites and services. Through its innovative technology, Captcha Image ensures a seamless user experience while maintaining high levels of protection against malicious activities such as spamming, account takeover, and data breaches."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://doctor-image-screen.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="QR Code Generator"
              description="A top QR code generator website offers a convenient and efficient tool for creating QR codes quickly and easily. Users can generate QR codes for various purposes such as sharing URLs, contact information, Wi-Fi credentials, or even payment links. These websites typically provide customizable options such as size, color, and design to tailor the QR code to specific needs. Additionally, they often support different formats for downloading the generated QR codes, ensuring compatibility with a wide range of devices and applications."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://yashbariqrcodegenerator.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="CipherGuard: Secure Communication Platform"
              description="CipherGuard is an end-to-end message security website and app designed to safeguard your conversations with military-grade encryption. With seamless integration across web and mobile platforms, CipherGuard ensures that your messages remain confidential from sender to receiver. Our advanced encryption protocols guarantee that only you and your intended recipients can access the content of your communications, providing peace of mind in an era of digital privacy concerns. Whether you're exchanging sensitive information with colleagues or chatting with loved ones, CipherGuard prioritizes your data protection."
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
