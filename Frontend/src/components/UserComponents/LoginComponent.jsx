import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from './UserComponentAction';
import { getData } from '../../core/services/authFetch';
import WikiPage from '../../pages/WikiPage';

const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, usersSelected } = useSelector(
        (state) => state.userComponentReducer
    );

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        const userData = await getData(email, password);
        if (userData) {
        console.log("buen intento")
        dispatch(login(userData))
        navigate("/wiki")
        }
        else {
            console.log("no hay credenciales correctas")
        }
    }

    const registerUser = () => {
      navigate("/register")
    }

    const goToWiki = () => {
      navigate("/wiki")
    }

  return (
    <div>
      {!user ? (
        <div>
            <form onSubmit={loginUser}>
                <label>Introduce email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <hr />
                <label>Introduce contraseña</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
                <button type="button" onClick={() => registerUser()}>Register</button>
            </form>
      </div>) : (
        <>
        <WikiPage/>
        </>
        )}
    </div>
  )
}

export default LoginComponent
