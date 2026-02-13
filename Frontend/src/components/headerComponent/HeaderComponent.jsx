import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../UserComponents/UserComponentAction";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { myths } = useSelector((state) => state.mythComponentReducer);
  const [selectedPantheon, setSelectedPantheon] = useState("");
  const user = useSelector((state) => state.userComponentReducer.user);
  const returnHome = () => {
    navigate("/wiki");
  };

  

  const handlePantheonChange = (e) => {
    const pantheon = e.target.value;
    setSelectedPantheon(pantheon);
    if (pantheon) {
      navigate(`/wiki/${pantheon}`);
    } else {
      navigate("/wiki");
    }
  };

  const goToSettings = () => {
    navigate("user/settings");
  };

  const logoutUser = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("token_refresh");
    dispatch(logout());
    navigate("/login");
  };

  const userManagement = () => {
    navigate("/userManagement");
  };

  useEffect(() => {
  if (!selectedPantheon) return;
}, [selectedPantheon]);

  return (
    <div className="header-main">
      <div className="header-div" onClick={() => returnHome()}>
        <p>Home</p>
      </div>
      <div className="header-div">
        <select value={selectedPantheon} onChange={handlePantheonChange}>
          <option value="">Ninguno</option>
          {myths?.map((myth, index) => (
            <option
              key={index}
              value={myth.pantheon}
              className="pantheon-select-options"
            >
              {myth.pantheon}
            </option>
          ))}
        </select>
      </div>
      <div className="header-div" onClick={() => goToSettings()}>
        <p>Configuración</p>
      </div>
      {user?.data?.role === "admin" && (
        <div className="header-div">
          <button onClick={userManagement}>Control de usuarios</button>
        </div>
      )}
      <div className="header-div">
        <button className="logout-button" onClick={() => logoutUser()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
