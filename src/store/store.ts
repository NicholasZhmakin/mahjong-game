import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

const initState = {};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware())
);

export type AppState = ReturnType<typeof rootReducer>;
export default store;
