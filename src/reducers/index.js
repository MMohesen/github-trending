import { combineReducers } from "redux";
import developers from "./developers";
import repositories from "./repositories";

export default combineReducers({
  repositories,
  developers,
});
