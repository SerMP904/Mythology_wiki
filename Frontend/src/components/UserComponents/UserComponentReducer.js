import { USER_LOGIN, USER_REGISTER } from "./UserComponentAction"

const initialState = {
    user: undefined
}

const userComponentReducer = (state = initialState, action) => {
    switch (action.type){
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload.userData
            }
        case USER_REGISTER:
            return {
                ...state,
                user: action.payload
            } 
    default:
        return state;
    }
}

export default userComponentReducer;