import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./UserComponentAction";
import { getData, loginUsingToken } from "../../core/services/authFetch";
import WikiPage from "../../pages/WikiPage";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, usersSelected } = useSelector(
    (state) => state.userComponentReducer
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    if (!email || !password) {setErrorMessage("Falta por rellenar un campo obligatorio.")
      setTimeout (() => {
        setErrorMessage("")
      }, 3000)
      return}
    const userData = await getData(email, password);
    console.log(userData)
    if (userData.status === "Failed") {
      setErrorMessage(userData.message);
      setTimeout (() => {
        setErrorMessage("")
      }, 3000)
      return;
    }

    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", userData.token);
      localStorage.setItem("token_refresh", userData.token_refresh);
      dispatch(login(userData));
      navigate("/wiki");
    } 
  };

  const registerUser = () => {
    navigate("/register");
  };

useEffect(() => {
  const autologin = async () => {
  const token = localStorage.getItem("token");
  if (!token) return;
  const loginToken = await loginUsingToken();
  dispatch(login(loginToken));
  navigate("/wiki")
  }
  autologin();
})

  return (
    <div>
      {!user ? (
        <div className="login-main">
          <form onSubmit={loginUser} className="login-form">
            {errorMessage !=="" && <span className="login-error">{errorMessage}</span>}
            <div className="login-form-question">
              <label className="login-form-label">Introduce email:</label>
              <input
                type="text"
                className="login-form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login-form-question">
              <label className="login-form-label">Introduce contraseña:</label>
              <input
                type="password"
                className="login-form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-form-buttons">
              <button type="submit" className="login-button">
                Login
              </button>
              <button
                type="button"
                className="login-button"
                onClick={() => registerUser()}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <WikiPage />
        </>
      )}
    </div>
  );
};

export default LoginComponent;
