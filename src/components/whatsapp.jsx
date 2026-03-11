import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const telefono = "5491122795861"; // Reemplazá con tu número
  const mensaje = "¡Hola! Vi tu portfolio y me gustaría contactarte.";
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      style={styles.whatsappFloat}
      target="_blank"
      rel="noopener noreferrer"
      // Manejo de hover mediante JS para mantener todo en este archivo
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <FaWhatsapp />
    </a>
  );
};

// ESTILOS AL FINAL DEL ARCHIVO (StyleSheet)
const styles = {
  whatsappFloat: {
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#25d366",
    color: "#fff",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "35px",
    boxShadow: "2px 5px 10px rgba(0, 0, 0, 0.3)",
    zIndex: "9999",
    textDecoration: "none",
    transition: "transform 0.3s ease",
  },
};

export default Whatsapp;