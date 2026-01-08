import React from 'react'
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
    const navigate = useNavigate()

  return (
    <div className="footer-main">
      <div className="footer-div">
        <p>Aprender más</p>
      </div>
      <div className="footer-div">
        <p>Sobre nosotros</p>
      </div>
      <div className="footer-div">
        <p>Caja de sugerencias</p>
      </div>
    </div>
  )
}

export default FooterComponent
