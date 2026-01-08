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

  return (
    <div>
      {!user ? (
        <div className="login-main">
            <form onSubmit={loginUser} className="login-form">
              <div className="login-form-question">
                <label className="login-form-label">Introduce email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="login-form-question">
                <label className="login-form-label">Introduce contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="login-form-buttons">
                <button type="submit" className="login-button">Login</button>
                <button type="button" className="login-button" onClick={() => registerUser()}>Register</button>
              </div>
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
