import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteUserSelected, editUser } from "../../core/services/userFetch";
import { useNavigate } from "react-router-dom";

const SettingsComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userComponentReducer.user);
  const { data } = user || {};
  const [editSettings, setEditSettings] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  const [userState, setUserState] = useState(data);

  useEffect(() => {
    setUserState(data);
  }, [data]);

  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");

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
    const newUser = {};
    if (name.trim()) newUser.name = name;
    if (username.trim()) newUser.username = username;
    if (email.trim()) newUser.email = email;
    const updatedUser = await editUser(data._id, newUser, user.token);
    setUserState(updatedUser);
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

  return (
    <div className="settings-standard">
      {user ? (
        editSettings ? (
          <div>
            <form className="settings-form" onSubmit={changeUserData}>
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
                onChange={(e) => setUserame(e.target.value)}
              ></input>
              <span className="settings-element">Email: </span>
              <input
                type="text"
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
