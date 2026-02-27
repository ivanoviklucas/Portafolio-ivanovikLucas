import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgAwards } from "react-icons/cg";
import imagenCertificadoDestacado from "../../Assets/Images/imagenCertificadoDestacado.png"
function Certificaciones() {
  return (
    <Container fluid className="about-section">
      <h1 className="project-heading">
        Mi Formación y <strong className="purple">Certificaciones</strong>
      </h1>
      <p style={{ color: "white", marginBottom: "30px" }}>
        Especialización en desarrollo de interfaces modernas y aplicaciones móviles.
      </p>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {/* CERTIFICADO DESTACADO - NO SE TOCO */}
        <Col md={10} className="project-card">
          <Card className="project-card-view">
            <Row>
              <Col md={7}>
                <Card.Img
                  variant="top"
                  src= {imagenCertificadoDestacado}
                  alt="Certificado Carrera"
                />
              </Col>
              <Col
                md={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Card.Body>
                  <Card.Title
                    className="purple"
                    style={{ fontSize: "1.8em", fontWeight: "bold" }}
                  >
                    Especialista Front-end
                  </Card.Title>
                  <Card.Text style={{ textAlign: "justify" }}>
                    Formación centrada en la experiencia de usuario. Dominio de{" "}
                    <b>React.js</b> para web y bases sólidas en lógica de
                    programación, maquetado profesional y optimización de
                    interfaces dinámicas.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="https://pub.coderhouse.com/legacy-certificates/698a0e2bddf3a648e4ab4938"
                    target="_blank"
                  >
                    <CgAwards /> &nbsp; Ver Credencial
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* --- FILA DE 4 CERTIFICADOS (md={3} para que entren todos) --- */}

        {/* 1. DESARROLLO WEB */}
        <Col md={3} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title>Desarrollo Web</Card.Title>
              <Card.Text>
                Estructura semántica HTML5, diseño responsivo y preprocesadores CSS (SASS).
              </Card.Text>
              <Button
                variant="primary"
                href="https://pub.coderhouse.com/certificates/782841ad-8218-4c0b-b796-d133aeb08cb6?v=1"
                target="_blank"
              >
                Ver Diploma
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 2. JAVASCRIPT */}
        <Col md={3} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title>Javascript</Card.Title>
              <Card.Text>
                Programación funcional, ES6+, manejo de promesas y consumo de APIs externas.
              </Card.Text>
              <Button
                variant="primary"
                href="https://pub.coderhouse.com/certificates/0682a17f-1b1e-4b60-a8fe-e3894bf70939?v=1"
                target="_blank"
              >
                Ver Diploma
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 3. REACT JS */}
        <Col md={3} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title>React JS</Card.Title>
              <Card.Text>
                Desarrollo de SPAs dinámicas, gestión de estados complejos y arquitectura de componentes.
              </Card.Text>
              <Button
                variant="primary"
                href="https://pub.coderhouse.com/certificates/e91427c8-694b-4257-96c7-57f93e42942f?v=1"
                target="_blank"
              >
                Ver Diploma
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* 4. DESARROLLO DE APP */}
        <Col md={3} className="project-card">
          <Card className="project-card-view">
            <Card.Body>
              <Card.Title>Desarrollo App</Card.Title>
              <Card.Text>
                Creación de aplicaciones móviles interactivas, manejo de componentes nativos y despliegue.
              </Card.Text>
              <Button
                variant="primary"
                href="https://pub.coderhouse.com/certificates/a7218df2-0635-4d25-bba9-c411314d3c96?v=1"
                target="_blank"
              >
                Ver Diploma
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Certificaciones;