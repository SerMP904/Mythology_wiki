export const USER_LOGIN = "USER_LOGIN"
export const USER_REGISTER = "USER_REGISTER"

export const login = (userData) => {
    return {
        type: USER_LOGIN,
        payload: {
            userData,
        }
    }
}

export const register = (userData) => {
    return {
        type: USER_REGISTER,
        payload: {
            userData
        }
    }
}