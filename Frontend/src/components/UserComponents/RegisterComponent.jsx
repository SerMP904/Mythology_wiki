import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from './UserComponentAction';
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../core/services/authFetch";

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUserSubmit = async(e) => {
    e.preventDefault();
    const userData = await createNewUser(name, username, email, password)
    if (userData) {
    dispatch(register(userData));
    navigate("/wiki")
    }
    else {
      console.log("no se ha podido registrar el usuario")
    }
  }

  const goBack = () => {
    navigate("/login")
  }

  return (
    <div>
      <form onSubmit={registerUserSubmit}>
        <label>Introduce nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <label>Introduce nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Introduce email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <hr />
        <label>Introduce contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
        <button type="button" onClick={() => goBack()}>Volver</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
