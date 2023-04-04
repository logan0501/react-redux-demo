import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
