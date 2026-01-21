import { USER_LOGIN, USER_LOGOUT, USER_REGISTER, USERS_LOAD, USER_LOAD } from "./UserComponentAction";

const initialState = {
  user: undefined,
  users: [],
};

const userComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload.userData,
      };
    case USER_REGISTER:
      return {
        ...state,
        user: action.payload.userData,
      };
      case USERS_LOAD:
      return {
        ...state,
        users: action.payload.users,
      };
    case USER_LOAD:
      return {
        ...state,
        user: action.payload.user,
        }
    case USER_LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default userComponentReducer;
