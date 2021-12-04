import React from "react";
import styled from "styled-components";
import Networds from "./networks";
import "../css/hero.css";
const HeroStyled = styled.section`
  width: 100vw;
  display: flex;
  background: #0f0e17;
  position: relative;
`;

function Hero() {
  return (
    <HeroStyled aria-label="hero" id="sobreMi">
      <section className="hero-container">
        <div className="hero-background"></div>
        <div className="wrapper">
          <div className="hero">
            <div className="hero-txt">
              <div className="hero-clip-path">
                <div className="hero-content">
                  
                  <div>
                    <h1>¡Hola a todos! Soy Junior López</h1>
                    <strong>Frontend Developer </strong>
                  </div>
                  <p className="me-description">
                    Developer que le encanta implementar diseños que inspiran y
                    atraen a las personas.
                  </p>
                  <Networds />
                  <a
                    href="images/JuniorLópezCV.pdf"
                    download="JuniorLópez-curriculum"
                    className="curriculum"
                  >
                    <button>Descargar Curriculum</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-clip-path-button"></div>
      </section>
    </HeroStyled>
  );
}

export default Hero;
