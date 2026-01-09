import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const HeaderComponent = () => {
    const navigate = useNavigate()
    const { myths } = useSelector((state) => state.mythComponentReducer);
    const [selectedPantheon, setSelectedPantheon] = useState('');

    const returnHome = () => {
        navigate("/wiki")
    }

    const handlePantheonChange = (e) => {
    const pantheon = e.target.value;
    setSelectedPantheon(pantheon);
    if (pantheon) {
        navigate(`/wiki/${pantheon}`);
      } else {
        navigate("/wiki")
      }
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
        <select value={selectedPantheon} onChange={handlePantheonChange}>
          <option value="">Ninguno</option>
          {myths.map((myth, index) => (
            <option key={index} value={myth.pantheon}>
              {myth.pantheon}
            </option>
          ))}
          </select>
      </div>
    </div>
  )
}

export default HeaderComponent
