import React, { useEffect, useState } from "react";
import {
  deleteUserSelected,
  editUser,
  getUsers,
  getUserUsingId,
} from "../../core/services/userFetch";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../UserComponents/UserComponentAction";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.userComponentReducer.users);

  const user = useSelector((state) => state.userComponentReducer.user);
  const [editSettings, setEditSettings] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);

  const userList = async () => {
    const users = await getUsers();
    if (users) {
      dispatch(loadUsers(users));
    }
  };

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

  const [selectedUser, setSelectedUser] = useState(null);

  const editUserUsingId = async (id) => {
    const userWithId = await getUserUsingId(id);
    setSelectedUser(userWithId);
    enableEditSettings();
  };

  const deleteUserUsingId = async (id) => {
    const userWithId = await getUserUsingId(id);
    setSelectedUser(userWithId);
    console.log(selectedUser);
    enableDeleteUser();
  };

  const changeUserData = async (e) => {
    e.preventDefault();
    const newUser = {};
    if (name.trim()) newUser.name = name;
    if (username.trim()) newUser.username = username;
    if (email.trim()) newUser.email = email;
    const updatedUser = await editUser(
      selectedUser.data._id,
      newUser,
      user.token,
    );
    setSelectedUser(updatedUser);
    finishEditSettings();
  };

  const deleteUser = async (e) => {
    e.preventDefault();
    console.log(selectedUser._id);
    const deletedUser = await deleteUserSelected(
      selectedUser.data._id,
      user.token,
    );
    setSelectedUser(deletedUser);
    disableDeleteUser();
  };

  useEffect(() => {
    userList();
  }, [users]);

  return (
    <div>
      {!users || users.length === 0 ? (
        <div>cargando datos</div>
      ) : editSettings ? (
        <div>
          <form className="settings-form" onSubmit={changeUserData}>
            <span className="settings-element">Nombre del usuario </span>
            <input
              type="text"
              className="settings-element"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <span className="settings-element">Mote del usuario </span>
            <input
              type="text"
              className="settings-element"
              onChange={(e) => setUserame(e.target.value)}
            ></input>
            <span className="settings-element">Email </span>
            <input
              type="text"
              className="settings-element"
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
