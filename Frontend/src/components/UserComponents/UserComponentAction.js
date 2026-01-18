export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGOUT = "USER_LOGOUT";
export const USERS_LOAD = "USERS_LOAD";

export const login = (userData) => {
  return {
    type: USER_LOGIN,
    payload: {
      userData,
    },
  };
};

export const register = (userData) => {
  return {
    type: USER_REGISTER,
    payload: {
      userData,
    },
  };
};

export const loadUsers = (users) => {
  return {
    type: USERS_LOAD,
    payload: {
      users,
    }
  }
}



export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("token_refresh");
  localStorage.removeItem("user");
  return {
    type: USER_LOGOUT,
  };
};
