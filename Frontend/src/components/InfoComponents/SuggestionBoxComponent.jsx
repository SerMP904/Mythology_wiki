import React from "react";

const SuggestionBoxComponent = () => {
  const sendSuggestion = () => {
    
  };

  return (
    <div className="suggestion-box-main">
      <h2 className="suggestion-box-title">Sugerencias y reportes</h2>

      <p className="suggestion-box-description">
        Si tienes alguna sugerencia, comentario o deseas reportar un error,
        puedes escribirnos a través del siguiente formulario. Tu opinión es muy
        importante para ayudarnos a mejorar el contenido y la experiencia del
        sitio.
      </p>

      <p className="suggestion-box-description">
        Por favor, describe tu mensaje de la forma más clara posible antes de
        enviarlo.
      </p>

      <form className="suggestion-box-form" onSubmit={sendSuggestion}>
        <label className="suggestion-box-label" htmlFor="suggestion">
          Tu mensaje
        </label>

        <input className="suggestion-box-input" type="text"/>

        <button className="suggestion-box-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SuggestionBoxComponent;
