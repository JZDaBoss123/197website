import { combineReducers } from "redux";

import blogs from "./blogs";
import intro from "./intro";

export default combineReducers({
  blogs,
  intro,
});
