import React, { useEffect } from 'react'
import { getUsers } from '../../core/services/userFetch'
import { useDispatch, useSelector } from 'react-redux'
import { loadUsers } from '../UserComponents/UserComponentAction'

const UserManagement = () => {
const dispatch = useDispatch();
const { users, usersSelected } = useSelector(
    (state) => state.userComponentReducer
  );
const userList = async () => {
    const users = await getUsers();
    if (users) {
        dispatch(loadUsers(users))
    }
}

useEffect(() => {
    userList();
  }, [dispatch]);

  return (
    <div>
      {!users || users.length === 0 ? (<div>
        cargando datos
      </div>): (<>
      <div>
        <p>funciona</p>
        {users.data.map((u, idx) => {
            return (
                <div key={idx}>
                    <div><p>Nombre: {u.name}</p></div>
                    <div><p>Apodo: {u.username}</p></div>
                    <div>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </div>
                </div>
            )
        })}
      </div>
      </>) }
    </div>
  )
}

export default UserManagement
