import React from 'react'
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
    const navigate = useNavigate()

    const goToLearn = () => {
      navigate("wiki/learnMore")
    }

    const goToAboutUs = () => {
      navigate("wiki/aboutUs")
    }

    const goToSuggestion = () => {
      navigate("wiki/suggestionBox")
    }

  return (
    <div className="footer-main" >
      <div className="footer-div" onClick={() => goToLearn()}>
        <p>Aprender más</p>
      </div>
      <div className="footer-div" onClick={() => goToAboutUs()}>
        <p>Sobre nosotros</p>
      </div>
      <div className="footer-div" onClick={() => goToSuggestion()}>
        <p>Caja de sugerencias</p>
      </div>
    </div>
  )
}

export default FooterComponent
