import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import { rootReducer } from "./rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
