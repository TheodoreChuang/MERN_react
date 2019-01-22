import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import challengesReducer from "./challenges_reducer";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    challenges: challengesReducer
});