import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserSelected, editUser } from "../../core/services/userFetch";
import { useNavigate } from "react-router-dom";
import { loadUser } from "./UserComponentAction";

const SettingsComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userComponentReducer.user);
  const { data } = user || {};
  const [editSettings, setEditSettings] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  const [userState, setUserState] = useState(data);
  console.log("debajo")
  console.log(user)

  useEffect(() => {
    setUserState(data);
  }, [data]);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
    console.log(name, username, email)
    if (!name.trim() && !username.trim() && !email.trim()) {setErrorMessage("Rellene al menos uno de los campos.") 
      return;
    }
    const newUser = {};
    if (name?.trim()) newUser.name = name.trim();
    if (username?.trim()) newUser.username = username.trim();
    if (email?.trim()) newUser.email = email.trim();
    const updatedUser = await editUser(data._id, newUser, user.token);
    dispatch(loadUser(updatedUser));
    finishEditSettings();
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    console.log(userState._id);
    const deletedUser = await deleteUserSelected(userState._id, user.token);
    setUserState(deletedUser);
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
      loadUser();
    }, [dispatch]);

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
                placeholder={name || userState.name}
                className="settings-element"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <span className="settings-element">Mote del usuario: </span>
              <input
                type="text"
                placeholder={username || userState.username}
                className="settings-element"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <span className="settings-element">Email: </span>
              <input
                type="email"
                placeholder={email || userState.email}
                className="settings-element"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <div className="settings-buttons-div">
              <button className="settings-button" type="submit">Terminar y Guardar</button>
              <button className="settings-button" onClick={finishEditSettings}>Volver Sin Guardar</button>
              </div>
            </form>
          </div>
        ) : isDeleteUser ? (
          <div className="settings-form">
            <div className="settings-element">
              <p>¿Seguro que desea eliminar su cuenta?</p>
            </div>
            <div className="settings-buttons-div">
              <button className="settings-button" onClick={deleteUser}>Eliminar</button>
              <button className="settings-button" onClick={disableDeleteUser}>Cancelar</button>
            </div>
          </div>
        ) : (
          <div className="settings-main">
            <div className="settings-parameter-div">
              <span className="settings-element">Nombre del usuario: </span>
              <span className="settings-element">{name || userState.name}</span>
            </div>
            <div className="settings-parameter-div">
              <span className="settings-element">Mote del usuario: </span>
              <span className="settings-element">
                {username || userState.username}
              </span>
            </div>
            <div className="settings-parameter-div">
              <span className="settings-element">Email: </span>
              <span className="settings-element">
                {email || userState.email}
              </span>
            </div>
            <div className="settings-buttons-div">
            <button className="settings-button" onClick={enableEditSettings}>Editar</button>
            <button className="settings-button" onClick={enableDeleteUser}>Eliminar</button>
            </div>
          </div>
        )
      ) : (
        <>{goToLogin}</>
      )}
    </div>
  );
};

export default SettingsComponent;
