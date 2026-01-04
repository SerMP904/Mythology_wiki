import { combineReducers } from 'redux';
import mythComponentReducer from '../../components/MythComponents/MythComponentReducer';
import userComponentReducer from '../../components/UserComponents/UserComponentReducer';

const reducer = combineReducers({
    mythComponentReducer,
    userComponentReducer
});

export default reducer;