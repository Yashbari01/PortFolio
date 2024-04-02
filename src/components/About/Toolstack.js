import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiApple
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiLinux,
  SiWindows11,
  SiVercel,
  SiNotepadplusplus ,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 title="Windows"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotepadplusplus title="Notepad ++"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple title="Mac os" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
