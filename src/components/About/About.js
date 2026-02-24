import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Conocé quién <strong className="purple">SOY</strong>
            </h1>
            
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hola a todos, soy <span className="purple">Ivanovik Lucas </span>
                    de <span className="purple"> Buenos Aires, Argentina.</span>
                    <br />
                    Soy un apasionado <span className="purple">Desarrollador Front-End</span>.
                    <br />
                    He evolucionado desde las bases de la web hacia el desarrollo de aplicaciones modernas y escalables.
                    <br />
                    <br />
                    Mis especialidades actuales son:
                  </p>
                  <ul>
                    <li className="about-activity">
                      👉 Creación de interfaces con <span className="purple">React JS</span>
                    </li>
                    <li className="about-activity">
                      👉 Desarrollo de apps móviles con <span className="purple">React Native</span>
                    </li>
                    <li className="about-activity">
                      👉 Maquetación profesional con <span className="purple">HTML5 y CSS3</span>
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Mi <strong className="purple">Skillset</strong> Profesional
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Herramientas</strong> que utilizo
        </h1>
        
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;