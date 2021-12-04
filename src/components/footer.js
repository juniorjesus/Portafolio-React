import React from "react";
import "../css/footer.css";
import "./networks";
import Networdks from "./networks";

export default function Footeer() {
  return (
    <footer className="footer-container">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1638631178/bu_kbv5jk.png" alt="logo" width="50" height="50" />
            <p> Hecho con 💚 por Junior. Copyright 2021 - Todos los derechos reservados.</p>
          </div>
          <Networdks />
        </div>
      </div>
    </footer>
  );
}
