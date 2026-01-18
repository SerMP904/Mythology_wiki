import { LOAD_MYTHS } from "./MythComponentAction";

const initialState = {
    myths: [],
    mythsSelected: undefined
}

const mythComponentReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_MYTHS:
            return {
                ...state,
                myths: action.payload.mythsData,
            }
    default:
        return state;
    }
}

export default mythComponentReducer