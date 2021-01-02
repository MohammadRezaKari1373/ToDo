import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import todos from "./todo.reducer"
import visibilityFilter from "./visibilityFilter"

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  todos,
  visibilityFilter
});

export default rootReducer;
