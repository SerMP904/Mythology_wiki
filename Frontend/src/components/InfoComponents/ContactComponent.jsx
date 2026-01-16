import React from "react";
import { useSelector } from "react-redux";


const ContactComponent = () => {
  const user = useSelector((state) => state.userComponentReducer.user);
  return (
    <div class="contact-main-div">
      <h2 class="contact-tile">Información de contacto</h2>

      <div class="contact-section">
        <h3 class="contact-subtitle">Horario de atención</h3>
        <p class="contacto-info-text">
          Lunes a viernes, de 9:00 a 14:00
        </p>
      </div>

      <div class="contact-section">
        <h3 class="contact-subtitle">Dirección</h3>
        <p class="contacto-info-text">
          Calle Mi Calle 123, Portal 4, 5ª planta, Oficina B
        </p>
      </div>

      <div class="contact-section">
        <h3 class="contact-subtitle">Contacto telefónico</h3>
        <p class="contacto-info-text">
          Teléfono: <a href="tel:111222333">111 222 333</a>
        </p>
      </div>

      <div class="contact-section">
        <h3 class="contact-subtitle">Correo electrónico</h3>
        <p class="contacto-info-text">
          Email: <a href="mailto:info@empresa.com">info@empresa.com</a>
        </p>
      </div>

      <div class="contact-section">
        <h3 class="contact-subtitle">Personal</h3>
        <ul class="contacto-info-text">
          <li>Sergio Martínez Padilla</li>
          <li>Lara Guijarro Ruiz</li>
          <li>Antonio Martín Rodríguez</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactComponent;
