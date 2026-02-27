import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UN POCO <span className="purple"> SOBRE MÍ </span>
            </h1>
            <p className="home-about-body">
              Soy un entusiasta del desarrollo que recientemente completó la carrera de 
              <b className="purple"> Desarrollo de Aplicaciones Móviles en Coderhouse</b>. 
              Mi objetivo es crear experiencias digitales que funcionen bien en cualquier pantalla.
              <br />
              <br />
              Mis herramientas principales hoy son
              <i>
                <b className="purple"> JavaScript y React.js</b>
              </i>, 
              las cuales utilizo para construir interfaces dinámicas y modernas.
              <br />
              <br />
              Me apasiona el ecosistema de
              <i>
                <b className="purple"> Frontend y Mobile</b>
              </i>, 
              especialmente cuando se trata de conectar una buena experiencia de usuario con una lógica sólida.
              <br />
              <br />
              Sigo expandiendo mis conocimientos y aplicando lo aprendido en proyectos personales, 
              utilizando <b className="purple">React</b> para la web y 
              <i>
                <b className="purple"> tecnologías móviles</b>
              </i> para llevar las ideas a los dispositivos de los usuarios.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;