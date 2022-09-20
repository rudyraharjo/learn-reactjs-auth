import { combineReducers } from "redux";
import auth from "./authReducer";
import role from "./roleReducer";

const rootReducer = combineReducers({
  auth,
  role,
});

export default rootReducer;
