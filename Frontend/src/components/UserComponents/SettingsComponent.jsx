import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserSelected,
  editUser,
  getUserUsingId,
} from "../../core/services/userFetch";
import { useNavigate } from "react-router-dom";
import { loadUser, login, logout } from "./UserComponentAction";
import { validateEmail } from "../../core/utils/checkEmail";
import LoginComponent from "./LoginComponent";
import { loginUsingToken } from "../../core/services/authFetch";

const SettingsComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userComponentReducer.user?.data);
  console.log(user);

  const [editSettings, setEditSettings] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);

  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);

  const [errorMessage, setErrorMessage] = useState("");

  const enableEditSettings = () => {
    setEditSettings(true);
  };

  const enableDeleteUser = () => {
    setIsDeleteUser(true);
  };

  const disableDeleteUser = () => {
    setIsDeleteUser(false);
  };

  const finishEditSettings = () => {
    setEditSettings(false);
  };

  const changeUserData = async (e) => {
    e.preventDefault();
    if (!name || !username || !email) {
      setErrorMessage("Rellene todos los campos.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("El email no es válido");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }
    const userToken = localStorage.getItem("token");
    const newUser = { name: name, username: username, email: email };
    console.log(user._id, newUser, userToken);
    const updatedUser = await editUser(user._id, newUser, userToken);
    dispatch(loadUser(updatedUser));
    finishEditSettings();
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    const userId = await getUserUsingId(user.token);
    const deletedUser = await deleteUserSelected(userId._id, user.token);
    if (!deletedUser) return;
    localStorage.removeItem("token");
    localStorage.removeItem("token_refresh");
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
    } else {
      const autologin = async () => {
        const token = localStorage.getItem("token");
        
        if (!token) {navigate("/login"); console.log("fallo");return;}

        const loginToken = await loginUsingToken();
        console.log(loginToken)
        if (!loginToken || loginToken.error) {navigate("/login"); console.log("fallo2");return;}

        dispatch(login(loginToken));
        navigate("/wiki");
      };
      autologin();
    }
  }, [user]);

  return (
    <div className="settings-standard">
      {user ? (
        editSettings ? (
          <div>
            <form className="settings-form" onSubmit={changeUserData}>
              {errorMessage && <p className="settings-error">{errorMessage}</p>}
              <span className="settings-element">Nombre del usuario: </span>
              <input
                type="text"
                value={name || user.name}
                className="settings-element"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <span className="settings-element">Mote del usuario: </span>
              <input
                type="text"
                value={username || user.username}
                className="settings-element"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <span className="settings-element">Email: </span>
              <input
                type="email"
                value={email || user.email}
                className="settings-element"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <div className="settings-buttons-div">
                <button className="settings-button" type="submit">
                  Terminar y Guardar
                </button>
                <button
                  className="settings-button"
                  onClick={finishEditSettings}
                >
                  Volver Sin Guardar
                </button>
              </div>
            </form>
          </div>
        ) : isDeleteUser ? (
          <div className="settings-form">
            <div className="settings-element">
              <p>¿Seguro que desea eliminar su cuenta?</p>
            </div>
            <div className="settings-buttons-div">
              <button className="settings-button" onClick={deleteUser}>
                Eliminar
              </button>
              <button className="settings-button" onClick={disableDeleteUser}>
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <div className="settings-main">
            <div className="settings-parameter-div">
              <span className="settings-element">Nombre del usuario: </span>
              <span className="settings-element">{name || user.name}</span>
            </div>
            <div className="settings-parameter-div">
              <span className="settings-element">Mote del usuario: </span>
              <span className="settings-element">
                {username || user.username}
              </span>
            </div>
            <div className="settings-parameter-div">
              <span className="settings-element">Email: </span>
              <span className="settings-element">{email || user.email}</span>
            </div>
            <div className="settings-buttons-div">
              <button className="settings-button" onClick={enableEditSettings}>
                Editar
              </button>
              <button className="settings-button" onClick={enableDeleteUser}>
                Eliminar
              </button>
            </div>
          </div>
        )
      ) : (
        <>
          <LoginComponent />
        </>
      )}
    </div>
  );
};

export default SettingsComponent;
