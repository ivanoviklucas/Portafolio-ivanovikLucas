import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import appmotoenvios1 from "../../Assets/Images/appmotoenvios1 (1).jpg";
import ecomerceJs from "../../Assets/Images/ecomerceJs.jpg";

function Projects() {
  return (
    <Container fluid style={styles.projectSection}>
      <Particle />
      <Container>
        <h1 style={styles.projectHeading}>
          Mis Trabajos <strong style={styles.purple}>Recientes</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Aquí están algunos de los proyectos en los que he trabajado últimamente.
        </p>

        <Row style={styles.row}>
          {/* PROYECTO 1: APP DE ENVÍOS (La imagen alta) */}
          <Col md={5} style={styles.projectCardCol}>
            <Card style={styles.projectCardView}>
              <div style={styles.imgWrapper}>
                <Card.Img 
                  variant="top" 
                  src={appmotoenvios1} 
                  style={styles.cardImg} 
                />
              </div>
              <Card.Body style={styles.cardBody}>
                <Card.Title style={styles.cardTitle}>App de Envíos</Card.Title>
                <Card.Text style={styles.cardText}>
                  Aplicación móvil para logística con React Native. Firebase y seguimiento en tiempo real.
                </Card.Text>
                <Button 
                  variant="primary" 
                  href="https://github.com/ivanoviklucas/ReactNative-entrega-final" 
                  target="_blank"
                  style={styles.button}
                >
                  <BsGithub /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* PROYECTO 2: ECOMMERCE (La imagen ancha) */}
          <Col md={5} style={styles.projectCardCol}>
            <Card style={styles.projectCardView}>
              <div style={styles.imgWrapper}>
                <Card.Img 
                  variant="top" 
                  src={ecomerceJs} 
                  style={styles.cardImg} 
                />
              </div>
              <Card.Body style={styles.cardBody}>
                <Card.Title style={styles.cardTitle}>E-commerce Hardware</Card.Title>
                <Card.Text style={styles.cardText}>
                  Tienda online con JavaScript Vanilla. Gestión de carrito y renderizado dinámico.
                </Card.Text>
                <Button 
                  variant="primary" 
                  href="https://github.com/ivanoviklucas/javaScript-ivanovi-Lucas-Tercera-entrega" 
                  target="_blank"
                  style={styles.button}
                >
                  <BsGithub /> GitHub
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

const styles = {
  projectSection: {
    position: "relative",
    paddingTop: "150px",
    paddingBottom: "30px",
  },
  projectHeading: {
    color: "white",
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "20px",
  },
  purple: {
    color: "#c770f0",
  },
  row: {
    justifyContent: "center",
    alignItems: "flex-start", // Importante: permite que cada card tenga su propia altura
  },
  projectCardCol: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  projectCardView: {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)",
    border: "1px solid rgba(199, 112, 240, 0.2)",
    width: "100%",
    borderRadius: "15px",
    overflow: "hidden",
  },
  imgWrapper: {
    width: "100%",
    padding: "10px", // Espacio interno para que la imagen no pegue al borde
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  cardImg: {
    width: "auto",      // Deja que el ancho sea automático
    maxWidth: "100%",   // Pero que no se pase del card
    height: "350px",    // LIMITE DE ALTURA: Ajustalo si querés que sean más chicas o grandes
    objectFit: "contain", // SE VE COMPLETA: No corta nada
    borderRadius: "10px",
  },
  cardBody: {
    textAlign: "center",
    padding: "20px",
  },
  cardTitle: {
    fontWeight: "bold",
    color: "#c770f0",
  },
  cardText: {
    fontSize: "0.9rem",
    color: "#ccc",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#623686",
    border: "none",
  },
};

export default Projects;