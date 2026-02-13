import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "./UserComponentAction";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../core/services/authFetch";
import { validateEmail } from "../../core/utils/checkEmail";

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const registerUserSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (!name || !username || !email || !password ) {setErrorMessage("Falta por rellenar un campo obligatorio.")
      setTimeout (() => {
        setErrorMessage("")
      }, 3000)
      return}
    if (!validateEmail(email)) {setErrorMessage("El email no es válido")
      setTimeout (() => {
        setErrorMessage("")
      }, 5000)
      return}
    if (password.length < 5) {setErrorMessage("La contraseña es muy corta. Usa al menos 6 caracteres.")
      setTimeout (() => {
        setErrorMessage("")
      }, 5000)
      return}
    const userData = await createNewUser(name, username, email, password);
    if (userData.status === "Failed") {
      setErrorMessage(userData.message);
      setTimeout (() => {
        setErrorMessage("")
      }, 3000)
      return;
    }
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", userData.token);
      localStorage.setItem("token_refresh", userData.token_refresh);
      dispatch(register(userData));
      navigate("/wiki");
    } else {
      setErrorMessage(userData.message);
      setTimeout (() => {
        setErrorMessage("")
      }, 3000)
      return;
    }
  };

  const goBack = () => {
    navigate("/login");
  };

  return (
    <div className="register-main">
      <div className="register-img-container">
        <img
          src="../../../public/pilar.png"
          alt="pillar"
          className="register-img"
        />
      </div>
      <form onSubmit={registerUserSubmit} className="register-form">
        {errorMessage && <p className="register-error">{errorMessage}</p>}
        <div className="register-form-question">
          <label className="register-form-label">Introduce nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="register-form-question">
          <label className="register-form-label">
            Introduce nombre de usuario
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="register-form-question">
          <label className="register-form-label">Introduce email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-form-question">
          <label className="register-form-label">Introduce contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="register-form-buttons">
          <button className="register-button" type="submit">
            Registrarse
          </button>
          <button
            className="register-button"
            type="button"
            onClick={() => goBack()}
          >
            Volver
          </button>
        </div>
      </form>
      <div className="register-img-container">
        <img
          src="../../../public/pilar.png"
          alt="pillar"
          className="register-img"
        />
      </div>
    </div>
  );
};

export default RegisterComponent;
