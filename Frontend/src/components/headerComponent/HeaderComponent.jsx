import React from 'react'
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
    const navigate = useNavigate()

    const returnHome = () => {
        navigate("/wiki")
    }
  return (
    <div className="header-main">
      <div className="header-div" onClick={() => returnHome()}>
        <p>Home</p>
      </div>
      <div className="header-div">
        <p>Contact</p>
      </div>
      <div className="header-div">
        <p>Barra de búsqueda</p>
      </div>
    </div>
  )
}

export default HeaderComponent
