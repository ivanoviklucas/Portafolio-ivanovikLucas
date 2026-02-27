import React from "react";
import ReactDOM from "react-dom/client"; // Cambiamos esto
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Usamos ReactDOM aquí

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);