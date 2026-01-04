import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from './UserComponentAction';
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUserSubmit= () => {
    dispatch(register([name, username, email, password]));
    navigate("/wiki")
  }

  const goBack = () => {
    navigate("/login")
  }

  return (
    <div>
      <form>
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
        <button onClick={() => registerUserSubmit()}>Terminar</button>
        <button onClick={() => goBack()}>back</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
