import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaChrome } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows size={60} color="#0078D6" />
        <div className="tech-icons-text">Windows 10</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaChrome size={60} color="#DB4437" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode size={60} color="#007ACC" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

    </Row>
  );
}

export default Toolstack;
