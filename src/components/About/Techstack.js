import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiGit, 
  DiFirebase, 
  DiHtml5, 
  DiCss3 
} from "react-icons/di";
import { 
  SiBootstrap, 
  SiExpo,
  SiReact 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <div className="tech-icons-text">React Native</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpo />
        <div className="tech-icons-text">Expo</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;