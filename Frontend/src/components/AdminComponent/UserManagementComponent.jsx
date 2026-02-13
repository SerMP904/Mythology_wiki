import React, { useEffect, useState } from "react";
import {
  deleteUserSelected,
  editUser,
  getUsers,
  manageUserUsingId,
} from "../../core/services/userFetch";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../UserComponents/UserComponentAction";
import { validateEmail } from "../../core/utils/checkEmail";

const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userComponentReducer.users);
  const user = useSelector((state) => state.userComponentReducer.user);
  const userToken = localStorage.getItem("token");

  const [editSettings, setEditSettings] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);

  const userList = async () => {
    const users = await getUsers();
    if (users) {
      dispatch(loadUsers(users));
    }
  };

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

  const [selectedUser, setSelectedUser] = useState(null);

  const editUserUsingId = async (id) => {
    const userWithId = await manageUserUsingId(id, userToken);
    setSelectedUser(userWithId);
    enableEditSettings();
  };

  const deleteUserUsingId = async (id) => {
    const userWithId = await manageUserUsingId(id, userToken);
    setSelectedUser(userWithId);
    enableDeleteUser();
  };

  const changeUserData = async (e) => {
    e.preventDefault();
    console.log(selectedUser)
    console.log(name, username, email)
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
    const newUser = { name: name, username: username, email: email };
    const updatedUser = await editUser(selectedUser._id, newUser, userToken);
    setSelectedUser(updatedUser.data);
    finishEditSettings();
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    const deletedUser = await deleteUserSelected(selectedUser._id, userToken);
    setSelectedUser(deletedUser);
    disableDeleteUser();
  };

  useEffect(() => {
    userList();
  }, [users]);

  useEffect(() => {
  if (selectedUser) {
    setName(selectedUser.name);
    setUsername(selectedUser.username);
    setEmail(selectedUser.email);
  }
}, [selectedUser]);

  return (
    <div>
      {!users || users.length === 0 ? (
        <div>{errorMessage}</div>
      ) : editSettings ? (
        <div>
          <form className="settings-form" onSubmit={changeUserData}>
            {errorMessage && <p className="settings-error">{errorMessage}</p>}
            <span className="settings-element">Nombre del usuario </span>
            <input
              type="text"
              className="settings-element"
              value={name || selectedUser.name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <span className="settings-element">Mote del usuario </span>
            <input
              type="text"
              className="settings-element"
              value={username || selectedUser.username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <span className="settings-element">Email </span>
            <input
              type="text"
              className="settings-element"
              value={email || selectedUser.email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="settings-buttons-div">
              <button className="settings-button" type="submit">
                Terminar y Guardar
              </button>
              <button className="settings-button" onClick={finishEditSettings}>
                Volver Sin Guardar
              </button>
            </div>
          </form>
        </div>
      ) : isDeleteUser ? (
        <div className="settings-form">
          <div className="settings-element">
            <p>¿Seguro que desea eliminar la cuenta?</p>
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
        <div className="management-user-list">
          {users.data.map((u, idx) => (
            <div key={idx} className="user-card">
              <div>
                <p>Nombre: {u.name}</p>
              </div>
              <div>
                <p>Apodo: {u.username}</p>
              </div>
              <div className="management-buttons-div">
                <button
                  className="management-button"
                  onClick={() => editUserUsingId(u._id)}
                >
                  Editar
                </button>
                <button
                  className="management-button"
                  onClick={() => deleteUserUsingId(u._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
