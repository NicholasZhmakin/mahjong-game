import mainReducer from "./mainReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  mainR: mainReducer
});

export default rootReducer;
