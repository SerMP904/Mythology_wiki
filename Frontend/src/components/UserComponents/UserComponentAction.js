export const USER_LOGIN = "USER_LOGIN";
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGOUT = "USER_LOGOUT";
export const USERS_LOAD = "USERS_LOAD";
export const USER_LOAD = "USER_LOAD"
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS"

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

export const loadUser = (user) => {
  return {
    type: USER_LOAD,
    payload: {
      user,
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

export const updateUser = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: {
      user,
    }
  }
} 