import { combineReducers } from "redux";
import { reducer } from "redux-form";

import user from "../reducer/user";

export default combineReducers({
  user: user,
  form: reducer,
});
