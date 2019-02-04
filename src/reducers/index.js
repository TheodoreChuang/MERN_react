import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
import currentUserReducer from "./current_user_reducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  currentUser: currentUserReducer
});
