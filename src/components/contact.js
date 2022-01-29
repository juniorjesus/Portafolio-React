import React from "react";
import "../css/contact.css";
import { useForm } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xeqvljyy");
  if (state.succeeded) {
    console.log("mensaje enviado correctamente , revisa tu email");
  }

  return (
    <section className="contacto-container" aria-label="contact" id="contact">
      <form
        className="contacto-content"
        action="https://formspree.io/f/xeqvljyy"
        method="POST"
        id="form"
        onSubmit={handleSubmit}
      >
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-text">
          Si está interesado en trabajar conmigo en su próximo proyecto, no dude
          en ponerse en contacto.
        </p>
        <input type="text" name="name" placeholder="Nombre Completo" required />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          id="message"
          cols="30"
          rows="10"
          required
        ></textarea>
        <button type="submit" disabled={state.submitting}>
          Enviar mensaje
        </button>
        <img className="gif-programador" src="https://media.giphy.com/media/3zz2ihAv6L1HEE1U4G/giphy.gif" alt="" />
        <img className="vector" src="https://res.cloudinary.com/djbaqvlnn/image/upload/v1638595553/vector_bqfxen.svg" alt="" />
      </form>
    </section>
  );
}
